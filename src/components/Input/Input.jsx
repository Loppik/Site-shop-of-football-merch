import React, { Component } from 'react';

class Input extends Component {
  state = {
    ...this.props.data,
  }

  render() {
    const { labelName, type, name } = this.state;
    return (
      <label htmlFor={name}>
        <p>{labelName}:</p>
        <input type={type} name={name} />
      </label>
    );
  }
}

export default Input;
