import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import WhyKicket from './Component/WhyKicket';
import Service from './Component/Service';
// import Services2 from './Services2';
import Contact from './Component/Contact';
import Service_second from './Component/Service_second';


// Import other components for the routes

function App() {

  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* } />
        <Route path="/services1" element={<Services1 />} />
        <Route path="/services2" element={<Services2 />} />*/}
        <Route path="/why-kicket" element={<WhyKicket />}/>
           <Route path="/services1" element={<Service />} />
           <Route path="/services2" element={<Service_second />} />
        <Route path="/contact" element={<Contact />} /> 
     
      </Routes>
    </Router>
  );
}

export default App;
