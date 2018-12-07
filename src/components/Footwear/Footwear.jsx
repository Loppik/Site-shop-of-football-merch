import React, { Component } from 'react';
import axios from '../../axios';
import { connect } from 'react-redux';
import { API_URL } from '../../configs/config';
import './footwear.css';

class Footwear extends Component {
  state = {
    fb: null,
    sizes: null,
    size: null,
  };

  async componentDidMount() {
    const { params } = this.props;
    const fb = await axios.get(`shoes/${params.fbId}`);
    const sizes = await axios.get(`sizes/${params.fbId}`);
    this.setState({
      fb: fb.data.shoes,
      sizes: sizes.data,
    });
  }

  addProductToBasket = () => {
    this.props.onAddProductToBasket({ fb: this.state.fb, size: this.state.size });
  }

  changeSize = (event) => {
    this.setState({ size: event.target.value });
  }

  render() {
    const { fb, sizes } = this.state;
    return (
      <div>
        { fb && (
          <div>
            <img className="photo" src={`${API_URL}images/${fb.imageUrl}`} />
            <h1>{fb.name}</h1>
            <p>{fb.description}</p>
            { sizes.sizes && 
              sizes.sizes.map(size => (
                <label className="sizeLabel">
                  <input name="sizes" type="radio" value={size.size} className="sizeInput" onChange={this.changeSize} />
                  <span className="sizeSpan">{size.size}</span>
                </label>
              ))
            }
            {
              sizes.err && <p>{sizes.err}</p>
            }
            <button type="button" onClick={this.addProductToBasket}>Add to basket</button>
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
