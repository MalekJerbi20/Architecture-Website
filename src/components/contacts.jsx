import { useState } from 'react';
import Navbar from './navbar';
import './styles/contacts.css';

const Contacts = () => {
   const [formData , setFormData] = useState({
      name:'', email:'' , message:''  
    });
    const handleChange = (e) => {
      const {name , value} = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    }
      const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:3001/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });
      setFormData({ name: '', email: '', message: '' });
    }
  return (
   
   <>
   <Navbar /> 
  <div className="contact-page-container">
      {/* Left section: Image and bottom contact info */}
      <div className="contact-image-section">

        <div className="gallery1"><img 
          src="src\assets\whity.jpeg" 
          alt="Modern architectural home" 
          className="image1" />
        </div>

        <div className="gallery2"><img 
          src="src\assets\greeeyyyy.jpeg" 
          alt="Modern architectural home" 
          className="image2" />
        </div>


        <div className="gallery3"><img 
          src="src\assets\blacky.jpeg" 
          alt="Modern architectural home" 
          className="image3" />
        </div>
      </div>

      

      {/* Right section: Form */}
      <div className="contact-form-section">
        <h2 className="form-title">WE'D LOVE TO HEAR FROM YOU</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" className="form-input" name='name' value={formData.name} onChange={handleChange} />
          <input type="email" placeholder="Your Email" className="form-input" name='email' value={formData.email} onChange={handleChange} />
          <textarea placeholder="Your Message" className="form-textarea" name='message' value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
    
   </>
   
  );

};


export default Contacts;