import React, { useEffect } from 'react';
import './chatpage.css';

function ChatPage() {
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

    // Cleanup function to remove the script elements when component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []); // Runs only once, after the component is mounted

  return (
    <div className='chat-body'>
      <div className='container'>
        <h1>
          Embrace a Healthy Life
        </h1>
        <p>
          A healthy life is a balanced and active way of living that nurtures both physical and mental well-being.
          It involves making conscious choices to engage in regular exercise, consume nutritious foods, get enough sleep,
          and manage stress effectively. A healthy lifestyle not only helps prevent chronic diseases like heart disease,
          diabetes, and obesity but also enhances energy levels, improves mood, and boosts mental clarity. By maintaining 
          a strong mind-body connection and fostering positive habits, a healthy life empowers individuals to thrive, 
          enjoy longevity, and achieve a higher quality of life.
        </p>
      </div>

      <div className='container'>
        <h1>
          About My Doctor
        </h1>
        <p>
          A healthy life is a balanced and active way of living that nurtures both physical and mental well-being.
          It involves making conscious choices to engage in regular exercise, consume nutritious foods, get enough sleep,
          and manage stress effectively. A healthy lifestyle not only helps prevent chronic diseases like heart disease,
          diabetes, and obesity but also enhances energy levels, improves mood, and boosts mental clarity. By maintaining 
          a strong mind-body connection and fostering positive habits, a healthy life empowers individuals to thrive, 
          enjoy longevity, and achieve a higher quality of life.
        </p>
      </div>
    </div>
  );
}

export default ChatPage;
