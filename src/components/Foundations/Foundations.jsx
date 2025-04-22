import React from "react";
import "./Foundations.css"; // Importa lo stile CSS per personalizzare il design

const OurFoundations = () => {
  const foundations = [
    {
      title: "Commitment",
      description: "We are committed to delivering a high-quality, error-free product that meets the needs of our users. Our dedication to excellence drives every decision and ensures customer satisfaction.",
    },
    {
      title: "Satisfied users",
      description: "We strive to create satisfied users and customers by consistently enhancing the user experience. Our goal is to provide intuitive, reliable, and enjoyable solutions.",
    },
    {
      title: "Stability",
      description: "Ensuring stability and correct software behavior is at the core of what we do. We prioritize dependable performance to build trust and reliability.",
    },
    {
      title: "Improving the day-to-day work",
      description: "We focus on improving the day-to-day work of our team and our customers. By fostering a supportive environment and delivering dependable solutions, we ensure reassurance and satisfaction for everyone involved.",
    },
  ];

  return (
    <div>
    <div className="foundations-container">
      <div className="foundations-content">
        <div className="foundations-text-container">
          <h1 className="foundations-title">Our Foundations</h1>
          <p className="foundations-text">
          Quark Techie is committed to delivering high-quality, stable, and reliable software, ensuring an intuitive and satisfying experience for users and clients. Excellence drives every decision, providing error-free solutions and continuous support.
          </p>
          </div>
          <div classname="foundations-image">
          <a href="/contact" className="foundations-button">
            Let's Build Together
          </a>
        </div>
      </div>
    </div>
    <div className="our-foundations">

      <div className="foundations-list">
        {foundations.map((item, index) => (
          <div key={index} className="foundation-item">
            <div className="foundation-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default OurFoundations;