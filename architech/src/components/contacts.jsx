import { useState } from 'react';
import Navbar from './navbar';
import './styles/contacts.css';

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState(''); // To show success message

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        
        try {
            await fetch('http://localhost:3001/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            // Clear form and show success
            setFormData({ name: '', email: '', message: '' });
            setStatus('success');
            setTimeout(() => setStatus(''), 5000); // Clear success msg after 5s

        } catch (error) {
            console.error("Error sending form", error);
            setStatus('error');
        }
    };

    return (
        <>
            <Navbar />
            <div className="contact-page-container">
                <div className="contact-wrapper">
                    
                    {/* Left Section: Branding & Info (Replaces the images) */}
                    <div className="contact-info-section">
                        <h1 className="contact-headline">Let's Build <br /> Something <br /> Timeless.</h1>
                        <p className="contact-sub-headline">
                            Ready to start your project? We are here to listen.
                        </p>

                        <div className="info-grid">
                            <div className="info-item">
                                <h3>Visit Us</h3>
                                <p>123 Innovation Blvd, Design District<br />Tunis, Tunisia 1002</p>
                            </div>

                            <div className="info-item">
                                <h3>Contact</h3>
                                <p><a href="mailto:hello@aliarchitect.com">hello@aliarchitect.com</a></p>
                                <p><a href="tel:+21671000000">+216 71 000 000</a></p>
                            </div>

                            <div className="info-item">
                                <h3>Follow</h3>
                                <p>
                                    <a href="#">Instagram</a> &nbsp;/&nbsp; <a href="#">LinkedIn</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: The Pro Form */}
                    <div className="contact-form-section">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="form-input" 
                                    name='name' 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <input 
                                    type="email" 
                                    placeholder="Your Email Address" 
                                    className="form-input" 
                                    name='email' 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <textarea 
                                    placeholder="Tell us about your project..." 
                                    className="form-textarea" 
                                    name='message' 
                                    value={formData.message} 
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-button">
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <p style={{color: '#D4AF37', marginTop: '10px', fontSize: '0.9rem'}}>
                                    Message sent successfully. We will be in touch shortly.
                                </p>
                            )}
                             {status === 'error' && (
                                <p style={{color: 'red', marginTop: '10px', fontSize: '0.9rem'}}>
                                    Something went wrong. Please try again.
                                </p>
                            )}

                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Contacts;