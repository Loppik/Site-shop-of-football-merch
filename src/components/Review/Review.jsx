import React, { Component } from 'react';
import axios from 'axios';

class Review extends Component {
  state = {
    reviews: null,
    inputReviewValue: null,
  }

  async componentDidMount() {
    const { params } = this.props;
    const reviews = await axios.get(`http://localhost:8081/review/${params.fbId}`);
    this.setState({
      reviews: reviews.data,
    });
  }

  addReview = () => {
    axios.post('http://localhost:8081/review/add', {
      shoesId: this.props.params.fbId,
      text: this.state.inputReviewValue,
    });
  }

  updateInputValue = (event) => {
    this.setState({
      inputReviewValue: event.target.value,
    });
  }

  render() {
    const { reviews, inputReviewValue } = this.state;
    return (
      <div>
        { reviews && (
          <div>
            <p>Reviews:</p>
            { reviews.reviews
              && reviews.reviews.map(review => (
                <p key={review._id}>{review.text}</p>
              ))
            }
            { reviews.err && <p>Be the first to write a review</p> }
            <input value={inputReviewValue} onChange={this.updateInputValue} name="reviewText" />
            <button type="button" onClick={this.addReview}>Add review</button>
          </div>
        )
        }
      </div>
    );
  }
}

export default Review;
