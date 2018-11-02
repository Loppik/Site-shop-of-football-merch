import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Footwear extends Component {
  state = {
    fb: null,
    reviews: null,
  };

  async componentDidMount() {
    const { params } = this.props;
    const fb = (await axios.get(`http://localhost:8081/products/${params.fbId}`));
    const reviews = (await axios.get(`http://localhost:8081/review/${params.fbId}`));
    this.setState({
      fb: fb.data.shoes,
      reviews: reviews.data.reviews,
    });
  }

  addProductToBasket = () => {
    this.props.onAddProductToBasket(this.state.fb.name);
  }

  render() {
    const { fb, reviews } = this.state;
    if (!fb) return <p>Loading ...</p>;
    return (
      <div>
        <h1>{fb.name}</h1>
        <p>{fb.description}</p>
        <button type="button" onClick={this.addProductToBasket}>Add to basket</button>
        <br />
        <p>Reviews:</p>
        {
          reviews.map(review => (
            <p key={review._id}>{review.text}</p>
          ))
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    products: state.products,
  }),
  dispatch => ({
    onAddProductToBasket: (productName) => {
      dispatch({ type: 'ADD_PRODUCT', product: productName });
    },
  }),
)(Footwear);
