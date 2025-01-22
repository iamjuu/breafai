import React from 'react';

const Button = ({ btnName ,icon,className}) => {
  return (
    <button className={`px-4 py-2 text-white ${className}`}>
      {icon} {btnName}
    </button>
  );
};
export default Button;
