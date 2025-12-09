import './styles/navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <a href="/">ALI ARCHITECT</a>
      </div>
      <ul className="navbar-menu">
        <Link to="/about">ABOUT</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/contact">CONTACT</Link>
      </ul>
    </nav>
    </>
  );
}
export default Navbar;