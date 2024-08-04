import React, { useState, useEffect } from 'react';
import './Contact.css';
import Footer from './Footer';
import TopFooter from './TopFooter';
import HomeService from './HomeService';
const Contact = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup on unmount
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
        // Replace with your API endpoint
        const apiEndpoint = 'https://your-api-endpoint.com/submit';
        
        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle success
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle error
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
            <div className="contact-background" >
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
                    </div>
                </div>
            </div>
           
            <TopFooter></TopFooter>
            <Footer></Footer>

        </section>
    );
};

export default Contact;
