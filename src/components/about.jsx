import './styles/about.css';
import Navbar from './navbar';
const About = () => {
  return (
    <>
    <Navbar />
      <div className="about-us-container">
      <div className="who-we-are-wrapper">
        <h1 className="who-we-are-heading">WHO <br /> WE <br /> ARE</h1>
        <div className="vertical-line"></div>
      </div>
      
      <div className="content-wrapper">
        <h2 className="our-philosophy-heading">OUR  PHILOSOPHY</h2>
        <p className="philosophy-text">
          At "Lumix Architects", we believe that architecture is dialogue between human experience, and
          innovation, and environmental harmony. Our designs cultivave spaces thatnat inspire, endure,
          and connect. With metiuuuaattention a passion a and sustainianable sollutions, we transform visions into
          built realtias thahat stand of time.
        </p>
        <div className="tagline">
          <span className="diamond-icon">◇</span> Built on Vision
        </div>
      </div>
      <div className="image-wrapper">
        <img 
          src="src\assets\Aria Portal Vase – Modern 3D-Printed Decor with Layered Arch Design.jpeg" 
          alt="Modern architectural building facade" 
          className="architecture-image" 
        />
      </div>
    </div>
    </>
  
  );
}
export default About;