import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './footwear.css';

class Footwear extends Component {
  state = {
    fb: null,
    sizes: null,
    size: null,
    reviews: null,
  };

  async componentDidMount() {
    const { params } = this.props;
    const fb = await axios.get(`http://localhost:8081/products/${params.fbId}`);
    const sizes = await axios.get(`http://localhost:8081/sizes/${params.fbId}`);
    const reviews = await axios.get(`http://localhost:8081/review/${params.fbId}`);
    this.setState({
      fb: fb.data.shoes,
      sizes: sizes.data,
      reviews: reviews.data,
    });
  }

  addProductToBasket = () => {
    this.props.onAddProductToBasket({ fb: this.state.fb, size: this.state.size });
  }

  changeSize = (event) => {
    this.setState({ size: event.target.value });
  }

  render() {
    const { fb, sizes, reviews } = this.state;
    return (
      <div>
        { fb && (
          <div>
            <h1>{fb.name}</h1>
            <p>{fb.description}</p>
            { sizes.sizes && 
              sizes.sizes.map(size => (
                <label>
                  <input name="sizes" type="radio" value={size.size} className="productSize" onChange={this.changeSize} />
                  <span>{size.size}</span>
                </label>
              ))
            }
            {
              sizes.err && <p>{sizes.err}</p>
            }
            <button type="button" onClick={this.addProductToBasket}>Add to basket</button>
            <br />
            <p>Reviews:</p>
            { reviews.reviews &&
              reviews.reviews.map(review => (
                <p key={review._id}>{review.text}</p>
              ))
            }
            { reviews.err && <p>Be the first to write a review</p> }
          </div>
        )
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
    onAddProductToBasket: (product) => {
      dispatch({ type: 'ADD_PRODUCT', product: product.fb, size: product.size });
    },
  }),
)(Footwear);
