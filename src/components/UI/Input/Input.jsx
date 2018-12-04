import React from 'react';

import './input.css';

const Input = (props) => {
  const { label, type, name, onChange, value, error, validationDescription } = props;

  return (
    <label htmlFor={name}>
      <p>{label}:</p>
      <input type={type} name={name} value={value} onChange={onChange} />
      {error && <p>{validationDescription}</p>}
    </label>
  );
};

export default Input;
