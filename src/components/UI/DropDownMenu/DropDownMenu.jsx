import React from 'react';

const DropDownMenu = (props) => {
  return (
    <select>
      {
        props.data.options.map(option => (
          <option>{option.text}</option>
        ))
      }
    </select>
  );
}

export default DropDownMenu;
