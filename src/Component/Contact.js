import React, { useState, useEffect } from 'react';
import './Contact.css';
import Footer from './Footer';
import TopFooter from './TopFooter';
import HomeService from './HomeService';

const Contact = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [responseMessage, setResponseMessage] = useState('');

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
  
        window.addEventListener('resize', handleResize);
  
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiEndpoint = 'http://kicketapi.webprismits.us/api/contact';
        
        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // Set response message
            setResponseMessage(data.message || 'Message sent successfully!');
            // Set timeout to refresh the page after 6 seconds
            setTimeout(() => {
                window.location.reload();
            }, 6000);
        })
        .catch((error) => {
            setResponseMessage('Failed to send message. Please try again later.');
        });
    };

    const contactImageStyle = {
        width: '100%',
        maxWidth: '464px',
        height: 'auto',
        borderRadius: '30px',
    };

    const formContainerStyle = {
        padding: '20px',
        borderRadius: '10px',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
    };

    return (
        <section className="contact-section">
            <div className="contact-background">
                <h1>Contact</h1>
            </div>
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-image">
                        <img src={`${process.env.PUBLIC_URL}/con1.png`} alt="Contact" style={contactImageStyle} />
                    </div>
                    <div className="contact-form" style={formContainerStyle}>
                        <h2>Get In Touch With Us</h2>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name" 
                                value={formData.name} 
                                onChange={handleChange} 
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={formData.email} 
                                onChange={handleChange} 
                            />
                            <textarea 
                                name="message" 
                                placeholder="Message" 
                                value={formData.message} 
                                onChange={handleChange} 
                            ></textarea>
                            <button type="submit">Submit</button>
                        </form>
                        {responseMessage && (
                            <div className="alert-box">
                                {responseMessage}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <TopFooter />
            <Footer />
        </section>
    );
};

export default Contact;
