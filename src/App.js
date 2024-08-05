import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import WhyKicket from './Component/WhyKicket';
import Service from './Component/Service';
// import Services2 from './Services2';
import Contact from './Component/Contact';



// Import other components for the routes

function App() {
  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.button');
  
    buttons.forEach(function (button) {
      // Adding touchstart event listener to add the hover class on touch
      button.addEventListener('touchstart', function () {
        button.classList.add('hover');
      });
  
      // Adding touchend event listener to remove the hover class after touch ends
      button.addEventListener('touchend', function () {
        button.classList.remove('hover');
      });
  
      // Adding touchmove event listener to remove the hover class if the user scrolls
      button.addEventListener('touchmove', function () {
        button.classList.remove('hover');
      });
  
      // Adding mouseover event listener for desktop hover
      button.addEventListener('mouseover', function () {
        button.classList.add('hover');
      });
  
      // Adding mouseout event listener for desktop hover out
      button.addEventListener('mouseout', function () {
        button.classList.remove('hover');
      });
    });
  });
  
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
           <Route path="/services2" element={<Service />} />
        <Route path="/contact" element={<Contact />} /> 
     
      </Routes>
    </Router>
  );
}

export default App;
