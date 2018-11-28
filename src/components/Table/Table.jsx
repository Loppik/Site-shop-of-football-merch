import React from 'react';

const Table = (props) => {
  const { headers, shoes } = props;

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
        shoes.map(sh => (
          <tr>{ headers.map(header => (<td>{sh[header.toLowerCase()]}</td>)) }</tr>
        ))
      }
    </table>
  );
};

export default Table;
