import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>TechQuizPro</strong> – the ultimate platform to test and boost your coding knowledge!
      </p>

      <p>
        Whether you're just starting out or already a seasoned coder, our platform offers quizzes tailored to your skill level. Choose from <strong>Basic, Intermediate,</strong> and <strong>Expert</strong> levels across <strong>15 popular programming languages</strong>.
      </p>

      <h3>🚀 What We Offer:</h3>
      <ul>
        <li>Structured quizzes for every skill level</li>
        <li>Support for 15 programming languages including JavaScript, Python, C++, Java, and more</li>
        <li>Instant feedback to help you learn and grow</li>
        <li>Engaging and interactive quiz format</li>
      </ul>

      <h3>🎯 Our Mission:</h3>
      <p>
        To make coding education accessible, challenging, and fun for everyone – from beginners to advanced developers.
      </p>

      <h3>👨‍💻 Who We Are:</h3>
      <p>
        We are a team of developers, educators, and tech enthusiasts passionate about coding and teaching. Our goal is to build a community of learners who grow together through quizzes and challenges.
      </p>

      <p>Thanks for joining us on this journey. Ready to test your skills? Start your quiz today!</p>
    </div>
  );
};

export default AboutUs;
