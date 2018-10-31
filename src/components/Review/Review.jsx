import React, { Component } from 'react';
import axios from 'axios';

function Review() {
  return (
    <div>
      <input name="reviewText" />
      <button onClick={this.addReview}>
        Add review
      </button>
    </div>
  );
}

export default Review;
