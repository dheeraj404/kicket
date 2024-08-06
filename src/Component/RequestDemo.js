import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Modal, Button } from 'react-bootstrap';
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

  const [show, setShow] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const handleChange = (value, country) => {
    setFormData({ ...formData, phone: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: `+${formData.phone}`, // Ensure phone includes country code
      job_title: formData.jobTitle,
      company: formData.company,
      event_type: formData.eventType,
      hear_about_us: formData.hearAbout,
    };

    fetch('https://kicketapi.webprismits.us/api/enquire', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
      setModalMessage('Success: Your request has been submitted successfully.');
      setShow(true);
    })
    .catch((error) => {
      setModalMessage(`Error: ${error.message}`);
      setShow(true);
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
                height: '3.3rem'
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
              <option value="offline">Offline</option>
              <option value="online">Online</option>
            </select>
            <select name="hearAbout" value={formData.hearAbout} onChange={handleInputChange}>
              <option value="">How did you hear about us?</option>
              <option value="linkedin">LinkedIn</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="google">Google Search</option>
              <option value="referral">Referral</option>
            </select>
          </div>
          <div className='center'>
            <button type="submit" className="submit-button">Request A Demo</button>
          </div>
        </form>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request A Demo</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RequestDemo;
