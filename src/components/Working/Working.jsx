import React, { useState, useEffect } from 'react';
import './Working.css';
import { FaCog, FaChartBar, FaClipboardList, FaUserCheck } from 'react-icons/fa';

const Working = () => {
  const slides = [
    { id: 1, title: '01', subtitle: 'Consulting', text: 'We analyze your needs and advise you on the best quality assurance strategies.' },
    { id: 2, title: '02', subtitle: 'Assessment', text: 'We evaluate your software’s current state and identify areas for improvement.' },
    { id: 3, title: '03', subtitle: 'Defining KPIs and Metrics', text: 'We establish key performance indicators to measure testing ⠀⠀⠀⠀⠀⠀⠀⠀success.⠀⠀⠀⠀⠀⠀' },
    { id: 4, title: '04', subtitle: 'Process Modeling', text: 'We help in defining the process structure to ensure a smooth development flow.' },
    { id: 5, title: '05', subtitle: 'Coaching', text: 'We train teams on quality practices to ensure long-term results and knowledge sharing.' },
    { id: 6, title: '06', subtitle: 'Continuous Improvement', text: 'We emphasize continuous improvement across all stages of development to ensure ongoing success.' },
    { id: 7, title: '07', subtitle: 'Stakeholder Engagement', text: 'We engage stakeholders throughout the process to ensure alignment with business goals.' },
    { id: 8, title: '08', subtitle: 'Process Optimization', text: 'We continuously optimize processes to maximize efficiency and effectiveness.' },
    { id: 9, title: '09', subtitle: 'Test Strategy Definition', text: 'We define tailored test strategies for each project to ensure quality assurance at all stages.' },
    { id: 10, title: '10', subtitle: 'Risks and Mitigation', text: 'We identify potential risks and define strategies to mitigate them proactively.' },
    { id: 11, title: '11', subtitle: 'Quality Assurance Integration', text: 'We integrate quality assurance best practices within your development lifecycle.' },
    { id: 12, title: '12', subtitle: 'Regression Testing', text: 'We perform thorough regression testing to ensure that new features do not affect existing functionalities.' },
    { id: 13, title: '13', subtitle: 'Manual Testing', text: 'We conduct comprehensive manual testing to identify issues that automated tests might miss.' },
    { id: 14, title: '14', subtitle: 'Exploratory Testing', text: 'We use exploratory testing to discover unexpected issues and improve product quality.' },
    { id: 15, title: '15', subtitle: 'Usability Testing', text: 'We focus on usability to ensure your product offers a great user experience.' },
    { id: 16, title: '16', subtitle: 'Functional Test Automation', text: 'We automate functional tests to speed up the testing process and reduce human errors.' },
    { id: 17, title: '17', subtitle: 'System Integration Testing', text: 'We perform system integration testing to ensure seamless interaction between software modules.' },
    { id: 18, title: '18', subtitle: 'Automation Strategy', text: 'We define an automation strategy that fits your project’s unique needs, improving test efficiency.' },
    { id: 19, title: '19', subtitle: 'Test Automation Maintenance', text: 'We provide ongoing maintenance to ensure your test automation framework stays up-to-date and efficient.' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // 5000 ms = 5 seconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const sections = [
    {
      title: 'Consulting',
      icon: <FaClipboardList />,
      points: ['Assessment', 'KPI & Metrics', 'Process Modeling', 'Coaching'],
    },
    {
      title: 'Functional',
      icon: <FaUserCheck />,
      points: ['Test Plan', 'Test Cycles', 'Test Management', 'Bug Reporting'],
    },
    {
      title: 'Automation',
      icon: <FaCog />,
      points: ['ROI', 'Tools & Frameworks', 'Shifting Left', 'DevOps Integration'],
    },
    {
      title: 'Performance',
      icon: <FaChartBar />,
      points: ['Technical Architecture', 'Environments & Data', 'Test Parameterization', 'Non-Functional Testing'],
    },
  ];

  return (
    <div className="working-container">
      {/* Working Process Section */}
      <div className="working-content">
        <div className="working-text-container">
          <h1 className="working-title">Our Working Process</h1>
          <p className="working-text">
            A holistic strategy managed by QA experts
          </p>
          <a href="/contact" className="working-button">Contact Us</a>
        </div>
      </div>

      {/* Card Grid Section */}
      <div className="working-grid">
        {sections.map((section, index) => (
          <div key={index} className="working-card">
            <div className="card-icon">{section.icon}</div>
            <h3 className="card-title">{section.title}</h3>
            <ul className="card-points">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Headline Section - "How We Do It" */}
      <div className="headline-container">
        <h2 className="headline-title">How We Do It</h2>
        <h3 className="headline-subtitle">Comprehensive Methodology for Exhaustive Quality Assurance</h3>
        <p className="headline-text">
          We implement a holistic strategy covering every stage of development, ensuring quality every step of the way.
        </p>
      </div>

      {/* Slider Section */}
      <div className="slider-container">
        {/* Left Arrow */}
        <div className="slider-buttons left" onClick={prevSlide}>
          <span>&lt;</span>
        </div>

        {/* Slider Content */}
        <div className="slider-content">
          <div className="slider-number">{slides[currentIndex].title}</div>
          <h3 className="slider-subtitle">{slides[currentIndex].subtitle}</h3>
          <p className="slider-text">{slides[currentIndex].text}</p>
        </div>

        {/* Right Arrow */}
        <div className="slider-buttons right" onClick={nextSlide}>
          <span>&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Working;
