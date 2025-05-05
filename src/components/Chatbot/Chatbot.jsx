import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "./Chatbot.css"; // Add styles for the button and chatbox

// Define chatbot theme
const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, Helvetica, sans-serif",
  headerBgColor: "#2575fc",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#2575fc",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

// Chatbot steps
const steps = [
  {
    id: "1",
    message: "¡Hola! ¿En qué puedo ayudarte?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: "cursos", label: "Información sobre cursos", trigger: "3" },
      { value: "colaborar", label: "Colaborar con nosotros", trigger: "6" },
      { value: "contacto", label: "Información de contacto", trigger: "9" },
    ],
  },
  {
    id: "3",
    message: "Ofrecemos los siguientes cursos:",
    trigger: "4",
  },
  {
    id: "4",
    options: [
      { value: "calidad", label: "Calidad de Software y Testing", trigger: "5" },
      { value: "bdd", label: "BDD y Automatización E2E", trigger: "5" },
      { value: "devops", label: "Coding and DevOps for Testers", trigger: "5" },
    ],
  },
  {
    id: "5",
    message: "Puedes inscribirte a nuestros cursos desde la página de inscripción.",
    trigger: "2",
  },
  {
    id: "6",
    message: "Nuestro programa de colaboración ofrece acceso al mejor talento de nuestros cursos.",
    trigger: "7",
  },
  {
    id: "7",
    message: "¿Te gustaría saber más sobre las ventajas para empresas?",
    trigger: "8",
  },
  {
    id: "8",
    options: [
      { value: "si", label: "Sí", trigger: "8a" },
      { value: "no", label: "No", trigger: "2" },
    ],
  },
  {
    id: "8a",
    message: "Las ventajas incluyen acceso prioritario a talento certificado, alianzas estratégicas y más. Escríbenos a colaboraciones@qualisophy.com para más información.",
    trigger: "2",
  },
  {
    id: "9",
    message: "Puedes contactarnos a través del formulario en nuestra página de contacto o escribiendo a colaboraciones@qualisophy.com.",
    trigger: "2",
  },
];

// Chatbot component
const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="chatbot-button" onClick={toggleChatbot}>
        💬 Chat
      </button>
      {isOpen && (
        <div className="chatbot-box">
          <button className="close-button" onClick={toggleChatbot}>
            ✖
          </button>
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={steps}
              headerTitle="Asistente Virtual"
              placeholder="Escribe tu mensaje..."
              botAvatar="/public/Chatbot Chat Message.jpg"
              userAvatar="/public/user.jpg"
            />
          </ThemeProvider>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;