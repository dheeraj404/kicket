import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import RequestDemo from './RequestDemo';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openDemoPopup = () => {
    closeMenu();
    setIsDemoOpen(true);
  };

  const closeDemoPopup = () => {
    setIsDemoOpen(false);
  };

  const navigateHome = () => {
    navigate('/');
    closeMenu();
  };

  return (
    <div className='nav'>
      <nav className="navbar">
        <div className="navbar-brand" onClick={navigateHome} style={{ cursor: 'pointer' }}>
          <img src="/kicket-logo.svg" alt="Kicket" className="logo" />
          <h1>Kicket</h1>
        </div>
        <div>
          <button className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`} onClick={closeMenu}>
          <li><NavLink to="/" end activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/why-kicket" activeClassName="active">Why Kicket</NavLink></li>
          <li><NavLink to="/services1" activeClassName="active">Services 1</NavLink></li>
          <li><NavLink to="/services2" activeClassName="active">Services 2</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <li><button className="request-demo" onClick={openDemoPopup}>Request A Demo</button></li>
        </ul>
      </nav>
      {isDemoOpen && <RequestDemo onClose={closeDemoPopup} />}
    </div>
  );
}

export default Navbar;
