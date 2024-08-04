// ToggleCard.js
import React, { useState } from 'react';
import './ToggleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ToggleCard = ({ title, children, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`toggle-card ${isOpen ? 'open' : ''}`}>
      <div className="toggle-card-header" onClick={handleToggle}>
        <span className="card-title">
          {index + 1}. {title}
        </span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </div>
      {isOpen && (
        <div className="toggle-card-body">
          {children}
        </div>
      )}
    </div>
  );
};

export default ToggleCard;
