import React, { Component } from 'react';
import axios from '../../axios';
import { connect } from 'react-redux';

import validation from '../../validation/validation';

import './review.css';

class Review extends Component {
  state = {
    reviews: null,
    reviewText: null,
    erReviewText: false,
  }

  async componentDidMount() {
    const { params } = this.props;
    const reviews = await axios.get(`review/${params.fbId}`);
    this.setState({
      reviews: reviews.data,
    });
  }

  addReview = () => {
    const { reviewText } = this.state;
    if (validation.isInvalidReview(reviewText)) {
      this.setState({ erReviewText: true });
    } else {
      axios.post('review/add', {
        shoesId: this.props.params.fbId,
        text: reviewText,
      }).then((response) => {
        if (response.status == 200) {
          this.cleanInputValue();
          this.componentDidMount();
        } else {
          alert(response.err)
          // handle error
        }
      });
    }
  }

  cleanInputValue = () => {
    this.setState({
      reviewText: '',
    });
  }

  onChangeReviewText = (event) => {
    this.setState({
      reviewText: event.target.value,
    });
  }

  render() {
    const { reviews, reviewText, erReviewText } = this.state;
    return (
      <div>
        { reviews && (
          <div>
            <p>Reviews:</p>
            { reviews
              && reviews.map(review => (
                <div className="review">
                  <div className="userLogin">{review.login}</div>
                  <div>:</div>
                  <div className="reviewText">{review.text}</div>
                </div>
              ))
            }
            { reviews.length === 0 && <p>Be the first to write a review</p> }
            <input value={reviewText} onChange={this.onChangeReviewText} name="reviewText" />
            <button type="button" onClick={this.addReview}>Add review</button>
            { erReviewText && <p>Review must contain until 100 characters</p> }
          </div>
        )
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
)(Review);
