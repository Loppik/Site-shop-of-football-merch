import React from 'react';

const DropDownMenu = (props) => {
  const { options, onChange } = props;

  return (
    <select onChange={onChange}>
      {
        options.map(option => (
          <option>{option.name}</option>
        ))
      }
    </select>
  );
}

export default DropDownMenu;
