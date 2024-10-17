import React from 'react';
import './homestyle.css'

function HomePage() {
  return (
    <div className='body'>
      <div className='container'>
        <h1>My Doctor</h1>
        <h2>Your Personal Healthcare Assistant</h2>
        <button>Chat with My Doctor</button>
        <p>Our healthcare chatbot provides quick and reliable medical information at your fingertips. Whether you have questions about 
          symptoms, conditions, treatments, or general wellness, our AI-powered chatbot is here to guide you. Chat with ease from the 
          comfort of your home and receive instant responses to your healthcare queries. My Doctor Chatbot helps you make informed 
          decisions about your health, offering advice and resources tailored to your needs.

          Start your conversation today and take a step towards better health!</p>
      </div>
    </div>
  );
}

export default HomePage;
