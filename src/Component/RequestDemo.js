import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './RequestDemo.css';

const RequestDemo = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    eventType: '',
    hearAbout: '',
  });

  const handleChange = (value, country) => {
    setFormData({ ...formData, phone: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make API call here
    fetch('/api/request-demo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      onClose();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="request-demo-popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Request A Demo</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            <PhoneInput
              country={'us'}
              value={formData.phone}
              onChange={handleChange}
              inputStyle={{
                width: '100%',
                borderRadius: '15px',
                border: '1px solid rgba(217, 217, 217, 1)',
                background: 'transparent',
                color: 'white',
                height:'3.3rem'
              }}
              buttonStyle={{
                borderRadius: '15px',
              }}
            />
          </div>
          <div className="form-group">
            <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} />
            <input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleInputChange} />
          </div>
          <div className="form-group">
            <select name="eventType" value={formData.eventType} onChange={handleInputChange}>
              <option value="">Type of Event</option>
              {/* Add options here */}
            </select>
            <select name="hearAbout" value={formData.hearAbout} onChange={handleInputChange}>
              <option value="">How did you hear about us?</option>
              {/* Add options here */}
            </select>
          </div>
          <div className='center'>
          <button type="submit" className="submit-button">Request A Demo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestDemo;

