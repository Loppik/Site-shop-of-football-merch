import React, { Component } from 'react';
import axios from '../../axios';
import { connect } from 'react-redux';
import './review.css';

class Review extends Component {
  state = {
    reviews: null,
    inputReviewValue: null,
  }

  async componentDidMount() {
    const { params } = this.props;
    const reviews = await axios.get(`review/${params.fbId}`);
    this.setState({
      reviews: reviews.data,
    });
  }

  addReview = () => {
    axios.post('review/add', {
      shoesId: this.props.params.fbId,
      text: this.state.inputReviewValue,
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

  cleanInputValue = () => {
    this.setState({
      inputReviewValue: '',
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
            { reviews
              && reviews.map(review => (
                <div className="review">
                  <div className="userLogin">{review.login}</div>
                  <div>:</div>
                  <div className="reviewText">{review.text}</div>
                </div>
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

export default connect(
  state => ({
    user: state.user,
  }),
)(Review);
