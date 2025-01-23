import React from "react";

const Button = ({ btnName, img, icon, className }) => {
  return (
    <button className={`flex items-center gap-2 ${className}`}>
      {icon && <span>{icon}</span>}
      {img && <img src={img} alt="" />}
      {btnName && <span>{btnName}</span>}
    </button>
  );
};

export default Button;
