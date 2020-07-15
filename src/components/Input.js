import React from "react";

const Input = ({
  checked,
  className,
  value,
  type,
  placeholder,
  onInput,
  name,
  onClick
}) => (
  <input
    className={className}
    value={value}
    type={type}
    placeholder={placeholder}
    onChange={onInput}
    name={name}
    checked={checked}
    onClick={onClick}
  />
);

export default Input;
