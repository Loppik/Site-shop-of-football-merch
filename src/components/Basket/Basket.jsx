import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Basket extends Component {
  state = {
    show: true, // delete
  };

  onDeleteProduct = (event) => {
    const { parentNode } = event.target;
    const productName = parentNode.querySelector('a').textContent.slice(0, parentNode.textContent.length - 1);
    const product = this.props.products.filter((pr) => pr.name === productName);
    this.props.onDeleteProduct(product[0]);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onShowBasket}>Basket</button>
        <ul>
          {this.props.products.map((product, index) =>
              <li key={index}>
                <Link to={`/fb/${product._id}`}>
                  {product.name}
                </Link>
                { product.size }
                <button type="button" onClick={this.onDeleteProduct}>x</button>
              </li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    products: state.products,
  }),
  dispatch => ({
    onDeleteProduct: (product) => {
      dispatch({ type: 'DELETE_PRODUCT', product });
    },
  }),
)(Basket);
