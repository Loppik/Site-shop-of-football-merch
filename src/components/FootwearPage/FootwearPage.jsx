import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footwear from '../Footwear/Footwear';
import Review from '../Review/Review';

function FootwearPage(props) {
  const { params } = props.match; // eslint-disable-line
  return (
    <div>
      <NavBar />
      <Footwear params={params} />
      <Review />
    </div>
  );
}

export default FootwearPage;
