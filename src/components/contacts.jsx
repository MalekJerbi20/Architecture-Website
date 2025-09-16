import Navbar from './navbar';
import './styles/contacts.css';

const Contacts = () => {
  return (
   <>
   <Navbar /> 
   <div className="contacts-container">
    <div className="contact-form-container">
 <div className="contact-image-container"><img src="src\assets\blackBuilding.jpeg" alt="" /> </div>
    <div className="contact-us-subcontainer">
      <h1>Contact Us</h1>
      <p>We Love To Hear From You</p>
      <form action="" className='contact-form'>
        <input type="text" placeholder='Your Name' id='name' autoComplete='name' required />
        <input type="email" placeholder='Your Email' id='mail' autoComplete='email' required />
        <textarea name="" id="message" cols="30" rows="10" placeholder='Your Message' autoComplete='on' required></textarea>
        <button type='submit'>Send Message</button>
      </form>
    </div>
    </div>
   </div>
   </>
  );
};

export default Contacts;