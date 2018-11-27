import React from 'react';

const Input = (props) => {
  const { label, type, name, onChange } = props.data;

  return (
    <label htmlFor={name}>
      <p>{label}:</p>
      <input type={type} name={name} onChange={onChange} />
    </label>
  );
};

export default Input;
