import React from 'react';
import './styles/about.css'; // Make sure this matches your file structure
import Navbar from './navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        
        {/* Left Section: Big Title */}
        <div className="who-we-are-wrapper">
          <h1 className="who-we-are-heading">WHO <br /> WE <br /> ARE</h1>
          <div className="vertical-line"></div>
        </div>
        
        {/* Middle Section: Text Content */}
        <div className="content-wrapper">
          <h2 className="our-philosophy-heading">Our Philosophy</h2>
          <p className="philosophy-text">
            At <strong>Ali Architect</strong>, we believe that architecture is a dialogue between 
            human experience, innovation, and environmental harmony. Our designs cultivate spaces 
            that inspire, endure, and connect. 
            <br /><br />
            With meticulous attention to detail and a passion for sustainable solutions, 
            we transform visions into built realities that stand the test of time.
          </p>
          <div className="tagline">
            <span className="diamond-icon">◇</span> Built on Vision
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="image-wrapper">
          {/* Ensure the path to your image is correct */}
          <img 
            src="src/assets/Aria Portal Vase – Modern 3D-Printed Decor with Layered Arch Design.jpeg" 
            alt="Modern architectural building facade" 
            className="architecture-image" 
          />
        </div>

      </div>
    </>
  );
}

export default About;