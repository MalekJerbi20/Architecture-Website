import React from 'react';
import Navbar from './navbar';
import './styles/landing-page.css';

// SVG Component for the Drafting Compass (The architect's tool)
const CompassIcon = () => (
  <svg 
    className="architect-icon" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" strokeOpacity="0.2" /> {/* Subtle outer ring */}
    <path d="M12 2v20" /> {/* Vertical Line */}
    <path d="M2 12h20" /> {/* Horizontal Line */}
    <path d="m19 19-7-7-7 7" /> {/* Bottom Triangle/Compass legs */}
    <circle cx="12" cy="12" r="3" /> {/* Center pivot */}
  </svg>
);

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landing-container">
        
        <div className="hero-wrapper">
          
          {/* Left Text */}
          <div className="hero-text-section">
            <span className="hero-label">Ali Architect</span>
            
            <h1 className="hero-title">
              Where Vision <br />
              <span className="elegant-text">Meets Structure.</span>
            </h1>
            
            <p className="hero-subtitle">
              We craft the buildings you've dreamt of. 
              Precision, artistry, and function down to the last detail.
            </p> 
            
            <a href="http://localhost:5173/projects">
              <button className="hero-btn">Explore Our Projects</button>
            </a>
          </div>

          {/* Right Abstract Composition */}
          <div className="hero-image-section">
            <div className="composition-wrapper">
              
              {/* 1. New Abstract Image (Concrete & Light - Very Architectural) */}
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=800&auto=format&fit=crop" 
                alt="Minimalist Concrete Architecture" 
                className="comp-image" 
              />
              
              {/* 2. Gold Wireframe Offset */}
              <div className="comp-frame"></div>

              {/* 3. The Architect's Tool Icon */}
              <div className="comp-badge">
                <CompassIcon />
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default LandingPage;