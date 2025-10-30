import React from "react";

const Button = ({ text, isStyle }) => {
  return <button className={isStyle ? "active" : "inactive"}> {text} </button>;
};

export default Button;
