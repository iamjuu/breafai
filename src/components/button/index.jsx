import React from 'react';

const Button = ({ btnName ,img,icon,className}) => {
  return (
    <button className={` text-white ${className}`}>
      {icon}   <img src={img} alt="" />   {btnName}
    </button>
  );
};
export default Button;
