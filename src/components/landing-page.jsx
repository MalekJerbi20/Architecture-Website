
import './styles/landing-page.css';
const LandingPage = () => {
  return (
    <>
    <div className="landing-container">
    <div className="hero-text">
      <h1 className="hero-title">WHERE VISION <br /> MEETS  STRUCTURE</h1>
      <p className="hero-subtitle">We craft the buildings you've dreamt of <br /> Down to the last detail.</p> 
      <a href="http://localhost:5173/projects"><button>Explore Our Projects</button></a>
      <div className="image-container">
        <div className="image"><img src="src\assets\home.png" alt="" />
      </div>
      </div>
    </div>
    </div>
   
    </>
  );
}
export default LandingPage;