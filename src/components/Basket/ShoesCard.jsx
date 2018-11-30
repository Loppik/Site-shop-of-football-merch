import React from 'react';
import { Link } from 'react-router-dom';

import './shoesCard.css';

const ShoesCard = (props) => {
  const { shoes, onDelete } = props;

  return (
    <div className="card">
      <div className="image"></div>
      <div className="text">
        <Link to={`/fb/${shoes._id}`}>
          {shoes.name}
        </Link>
        <p>{shoes.description}</p>
      </div>
      <div className="info">
        { shoes.size }
      </div>
      <div className="price">
        <p>{ shoes.price }</p>
      </div>
      <button type="button" onClick={onDelete}>x</button>
    </div>
  );
};

export default ShoesCard;
