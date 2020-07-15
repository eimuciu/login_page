import React from "react";

const Button = ({ className, onClick, text }) => (
  <button className={className} type="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
