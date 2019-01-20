import React, { Component } from 'react';

import validation from '../../../../validation/validation';

import styles from './review.css';

class Review extends Component {
  state = {
    reviews: null,
    reviewText: null,
    erReviewText: false,
  }

  async componentDidMount() {
    const { params: { fbId }, dispatchGetReviews } = this.props;
    dispatchGetReviews(fbId);
  }

  addReview = () => {
    /*
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
    */
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
    const { isLoading, items } = this.props;
    return (
      <div>
        {!isLoading && items && (
          <div>
            <p>Reviews:</p>
            {items.map(review => (
              <div className={styles.review}>
                <div className={styles.userLogin}>{review.login}</div>
                <div>:</div>
                <div className={styles.reviewText}>{review.text}</div>
              </div>
            ))
            }
            { items.length === 0 && <p>Be the first to write a review</p> }
            <input value={reviewText || ''} onChange={this.onChangeReviewText} name="reviewText" />
            <button type="button" onClick={this.addReview}>Add review</button>
            { erReviewText && <p>Review must contain until 100 characters</p> }
          </div>
        )
        }
      </div>
    );
  }
}

export default Review;
