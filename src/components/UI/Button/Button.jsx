import React from 'react';

function Button(props) {
  const { text, handler } = props.data;

  return (
    <button type="button" onClick={handler}>{text}</button>
  );
}

export default Button;
