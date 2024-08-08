import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequestDemo from './RequestDemo'; // Import the RequestDemo component
import './TopFooter.css'; // Import the CSS file

const TopFooter = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemoPopup = () => {
    setIsDemoOpen(true);
  };

  const closeDemoPopup = () => {
    setIsDemoOpen(false);
  };

  return (
    <div>
    <div className='left_line'></div>
    <div className='right_line'></div>
    <div className='TopFooter'>
      <div className='phone_img'>
        <img src='/phone.png' className='respo-img' alt="Phone" />
      </div>
      <div className='text_button'>
        <div>
          <h1>Experience It Live: Request Your Demo Today</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='request_button'>
          <button onClick={openDemoPopup}>Request For Demo</button>
        </div>
      </div>

      {isDemoOpen && <RequestDemo onClose={closeDemoPopup} />} {/* Show the RequestDemo modal */}
    </div>
   
    </div>
    
  );
};

export default TopFooter;

