import React from 'react';

function DropDownMenu(props) {
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
