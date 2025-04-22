import React from 'react';
import './About.css';

  const About = () => {
  
  return (
    <div>
    <div className="about-container">
      <div className="about-content" >
        <div className="about-text-container">
          <h1 className="about-title">About Us</h1>
          <p className="about-text">
            At Quark Techie, we are a team of professionals passionate about software quality. With over 14 years of industry experience, we help businesses like yours create flawless digital products.
          </p>
          </div>
          <div classname="about-image">
          <a href="/contact" className="about-button">
            Let's Build Together
          </a>
        </div>
      </div>
    </div>
    <section className="why-quark-techie">
      <div className="container">
        <h2>Why Quark <font color="#567b7">Techie</font> </h2>
        <div className='why-quark-techie-img-p'>  
        <p className='why-quark-techie-p'> <b> Are you looking for an efficient and reliable solution that allows you to achieve your goals without stress? For over 14 years Quark Techie has been helping customers like you achieve tangible results thanks to tailor-made, innovative and sustainable solutions. Don't wait any longer! Contact us today and find out how we can help you get what you want!</b></p>
        <img src="aboutimage.png" alt="" className='why-quark-techie-img'/>
        </div>
        <div className="why-choose-us__subsections">
          
          <div className="subsection">
            <div className="subsection__icon">🔍</div>
            <h3>Experience</h3>
            <p>Our team of quality assurance experts has extensive experience in various sectors and technologies.</p>
            <p><strong>Example:</strong> "Our engineers have worked on web, mobile, e-commerce, and enterprise software development projects."</p>
          </div>
          
          <div className="subsection">
            <div className="subsection__icon">⚙️</div>
            <h3>Customization</h3>
            <p>We design tailored quality assurance strategies that align with your technological environment, needs, and goals.</p>
            <p><strong>Example:</strong> "We adapt our methodology to your development cycle, whether Agile, Waterfall, or hybrid."</p>
          </div>
        

          <div className="subsection">
            <div className="subsection__icon">📞</div>
            <h3>Communication</h3>
            <p>We maintain clear and transparent communication, with direct channels for efficient collaboration.</p>
            <p><strong>Example:</strong> "We use project management and real-time communication tools to keep you informed at all times."</p>
          </div>

          <div className="subsection">
            <div className="subsection__icon">💡</div>
            <h3>Commitment to Quality</h3>
            <p>We are passionate about software quality and dedicated to helping you achieve your goals.</p>
            
            <p><strong>Example:</strong> We implement rigorous testing processes, from automated scripts to manual exploratory testing, ensuring your software meets the highest standards.</p>
        </div></div>
      
      </div>
    </section>
    </div>
  );
};

export default About;