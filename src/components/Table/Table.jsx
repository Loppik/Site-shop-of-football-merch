import React from 'react';

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
          <tr>{ headers.map(header => (<td>{obj[header.toLowerCase()]}</td>)) } { buttons.map(button => (<td shoesId={obj._id}>{button}</td>)) } </tr>
        ))
      }
    </table>
  );
};

export default Table;