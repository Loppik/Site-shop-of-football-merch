import React, {Component} from 'react';
import axios from 'axios';

class Review extends Component {
  addReview = event => {
    
  }

  render() {
    return (
      <div>
        <input name="reviewText"/>
        <button onClick={this.addReview}>
          Add review
        </button>
      </div>
    )
  }
}

export default Review;