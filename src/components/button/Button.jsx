import React from 'react';

import './button.css';

const Button = (props) => {
  const { text, onClick } = props;

  return (
    <button type="button" onClick={onClick}>{text}</button>
  );
};

export default Button;
