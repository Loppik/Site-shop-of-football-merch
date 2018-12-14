import React from 'react';

import './table.css';

const Table = (props) => {
  const { headers, objects, buttons } = props;

  return (
    <table>
      <tr>
        {
          headers.map(header => (
            <th>{header}</th>
          ))
        }
      </tr>
      {
        objects.map(obj => (
          <tr>{ headers.map(header => (<td>{obj[header.charAt(0).toLowerCase() + header.slice(1)]}</td>)) } { buttons.map(button => (<td objectid={obj._id}>{button}</td>)) } </tr>
        ))
      }
    </table>
  );
};

export default Table;
