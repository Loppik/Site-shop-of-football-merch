import React, { Component } from 'react';
import axios from 'axios';

class Footwear extends Component {

  state = {
    shoes: null,
    reviews: null
  };

  async componentDidMount() {
    const { params } = this.props;
    const fb = (await axios.get(`http://localhost:8081/products/${params.fbId}`));
    const reviews = (await axios.get(`http://localhost:8081/review/${params.fbId}`));
    this.setState({
      shoes: fb.data.shoes,
      reviews: reviews.data.reviews
    });
  }

  render() {
    const { fb, reviews } = this.state;
    if (!fb) return <p>Loading ...</p>;
    return (
      <div>
        <h1>{fb.name}</h1>
        <p>{fb.description}</p>
        <br />
        <p>Reviews:</p>
        {
          reviews.map(review => (
            <p key={review._id}>{review.text}</p>
          ))
        }
      </div>
    )
  }
}

export default Footwear;