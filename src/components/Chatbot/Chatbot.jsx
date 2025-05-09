import React, { useState, useEffect } from "react";
import { Ollama } from "ollama/browser"; // Import the Ollama package
import "./Chatbot.css";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Initialize Ollama client using environment variable
  const client = new Ollama({ baseUrl: import.meta.env.VITE_OLLAMA_BASE_URL });

  // Add a system message to provide context about the webpage
  useEffect(() => {
    const systemMessage = {
      sender: "bot",
      text: "¡Hola! Soy el asistente virtual de Qualisophy. Puedo ayudarte con información sobre nuestros cursos, colaboraciones, y más. Pregúntame lo que necesites.",
    };
    setMessages([systemMessage]);
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
  const sendMessage = async () => {
    if (!input.trim()) return;
  
    // Add user message to the chat
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
  
    try {
      // Add a placeholder for the bot's message
      let botMessage = { sender: "bot", text: "" };
      setMessages((prev) => [...prev, botMessage]);
  
      // Call Ollama's chat API with streaming support
      const response = await fetch(import.meta.env.VITE_OLLAMA_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: import.meta.env.VITE_OLLAMA_MODEL, // Use environment variable for model
          messages: [
            {
              role: "system",
              content:
                "You are a helpful assistant for the Qualisophy website. You provide information about courses, collaborations, and contact details. Here is some of the data you should know: we offer 3 courses: Calidad de Software y Testing, Curso BDD y automatizacion E2E, Coding and DevOps for Testers. We also offer consulting services and Formacion para Empresas. We also have a partnership program: Ofrecemos a las empresas colaboradoras la posibilidad de acceder directamente a nuestros alumnos destacados, formados en tecnologías actuales y con orientación práctica desde el primer día. We offer a contact email: contact@qualisophy.com. We also have a contact telephone: +1 234 567 890. You can sign up to any course by filling out the form located on the bottom of the specific courses page. You can also access the details of each course by clicking on the dropdown button located on the header bar. From now on, you will respond to questions about these topics to a user who is interested in our services. Keep your answers short and concise and about the topics mentioned.",
            },
            ...messages.map((msg) => ({
              role: msg.sender === "bot" ? "assistant" : "user",
              content: msg.text,
            })),
            { role: "user", content: input },
          ],
        }),
      });
  
      if (!response.body) throw new Error("No response body");
  
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
  
      // Read the streamed response
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
  
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n").filter((line) => line.trim() !== "");
  
        for (const line of lines) {
          try {
            const parsed = JSON.parse(line);
            if (parsed.message?.content) {
              botMessage.text += parsed.message.content;
              setMessages((prev) => {
                const updatedMessages = [...prev];
                updatedMessages[updatedMessages.length - 1] = botMessage; // Update the last message (bot's message)
                return updatedMessages;
              });
            }
          } catch (err) {
            console.error("Error parsing chunk:", err);
          }
        }
      }
    } catch (error) {
      console.error("Error calling Ollama API:", error);
      const errorMessage = {
        sender: "bot",
        text: "Hubo un error al procesar tu mensaje. Por favor, inténtalo de nuevo.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  
    setInput(""); // Clear input field
  };
  
  return (
    <div>
      <button className="chatbot-button" onClick={toggleChatbot}>
        💬
      </button>
      {isOpen && (
        <div className="chatbot-box">
          <button className="close-button" onClick={toggleChatbot}>
            ✖
          </button>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index} // Ensure each message has a unique key
                className={`chatbot-message ${
                  msg.sender === "bot" ? "bot" : "user"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Escribe tu mensaje..."
            />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;