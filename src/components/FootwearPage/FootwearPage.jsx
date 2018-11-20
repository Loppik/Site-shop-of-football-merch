import React from 'react';
import Footwear from '../Footwear/Footwear';
import Review from '../Review/Review';

function FootwearPage(props) {
  const { params } = props.match; // eslint-disable-line
  return (
    <div>
      <Footwear params={params} />
      <Review params={params} />
    </div>
  );
}

export default FootwearPage;
