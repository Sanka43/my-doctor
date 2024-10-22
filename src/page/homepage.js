import React, { useEffect } from 'react';
import './homestyle.css'

function HomePage() {
  
  useEffect(() => {
    // Create script element for embedding chatbot
    const script1 = document.createElement('script');
    script1.textContent = `window.chtlConfig = { chatbotId: "7487947858" }`;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.async = true;
    script2.setAttribute('data-id', '7487947858');
    script2.id = 'chatling-embed-script';
    script2.src = 'https://chatling.ai/js/embed.js';
    document.body.appendChild(script2);

   
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
    <div className='body'>
      <div className='home-container'>
        <h1 className='title'>My Doctor</h1>
        <h2>Your Personal Healthcare Assistant</h2>
        <p>Our healthcare chatbot provides quick and reliable medical information at your fingertips. Whether you have questions about 
          symptoms, conditions, treatments, or general wellness, our AI-powered chatbot is here to guide you. Chat with ease from the 
          comfort of your home and receive instant responses to your healthcare queries. My Doctor Chatbot helps you make informed 
          decisions about your health, offering advice and resources tailored to your needs.

          Start your conversation today and take a step towards better health!</p>
      </div>
    </div>

    <div className='second-container'>
      <h1>Embrace a Healthy Life</h1>
      <p>
          A healthy life is a balanced and active way of living that nurtures both physical and mental well-being.
          It involves making conscious choices to engage in regular exercise, consume nutritious foods, get enough sleep,
          and manage stress effectively. A healthy lifestyle not only helps prevent chronic diseases like heart disease,
          diabetes, and obesity but also enhances energy levels, improves mood, and boosts mental clarity. By maintaining 
          a strong mind-body connection and fostering positive habits, a healthy life empowers individuals to thrive, 
          enjoy longevity, and achieve a higher quality of life.
        </p>
    </div>
     <div className='second-container'>
      <h1>
      How to maintain a healthy life
      </h1>
      <p>
      Maintaining a healthy life involves a balance of nutritious eating, regular exercise, and good mental well-being. It's important to stay hydrated, get enough sleep, and manage stress through relaxation techniques or hobbies. Avoid harmful habits like smoking or excessive drinking, and maintain strong, supportive relationships. Regular health checkups can help detect issues early, while practicing good hygiene keeps you physically well. Prioritizing both physical and mental health ensures a more balanced, happy life.
      </p>
     </div>

     <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
          A healthy lifestyle involves regular exercise, nutritious food, adequate sleep, stress management, and a balanced lifestyle. It prevents chronic diseases, enhances energy, improves mood, and boosts mental clarity, empowering individuals to thrive, enjoy longevity, and improve their quality of life.
          </p>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            Email: info@mydoctor.com
          </p>
          <p>
            Phone: (+94) 76 2345678
          </p>
          <p>
            Address: 123 Healthy Way, Colomco, Sri Lanka
          </p>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </footer>
    
    </div>
  );
}

export default HomePage;
