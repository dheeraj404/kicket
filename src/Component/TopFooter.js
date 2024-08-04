import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopFooter.css'; // Import the CSS file

const TopFooter = () => {
  return (
   <div className='TopFooter'>
    <div className='phone_img'>
<img src='/phone.png' className='respo-img'/>
    </div>
    <div className='text_button'>
    <div> <h1>Experience It Live: Request Your Demo Today</h1></div> 
     <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} className='request_button'> <button>Request For demo</button></div>

    </div>
  
   </div>
  );
};

export default TopFooter;
