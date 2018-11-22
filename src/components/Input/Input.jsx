import React, { Component } from 'react';

function Input(props) {
  const { labelName, type, name } = props.data;

  return (
    <label htmlFor={name}>
      <p>{labelName}:</p>
      <input type={type} name={name} />
    </label>
  );
}

export default Input;
