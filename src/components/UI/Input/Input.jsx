import React from 'react';

const Input = (props) => {
  const { label, type, name, onChange, value } = props;

  return (
    <label htmlFor={name}>
      <p>{label}:</p>
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  );
};

export default Input;
