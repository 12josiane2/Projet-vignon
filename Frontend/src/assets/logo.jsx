import React from 'react';
import logo from '../assets/logo.png';

const Logo = ({ className = 'w-20 h-20 ' }) => {
  return (
    <img 
      src={logo} 
      alt="Logo" 
      className={className} 
    />
  );
};

export default Logo;
