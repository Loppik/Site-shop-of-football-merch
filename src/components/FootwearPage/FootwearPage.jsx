import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footwear from '../Footwear/Footwear';
import Review from '../Review/Review';

function FootwearPage(props) {
  return (
    <div>
      <NavBar />
      <Footwear params={props.match.params} />
      <Review />
    </div>
  );
}

export default FootwearPage;
