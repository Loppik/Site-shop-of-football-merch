import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './basket.css';

import ShoesCard from './ShoesCard';
import Orderer from './Orderer';

class Basket extends Component {
  state = {
    
  };

  onDeleteProduct = (event) => {
    const { parentNode } = event.target;
    const productName = parentNode.querySelector('a').textContent.slice(0, parentNode.textContent.length - 1);
    const product = this.props.products.filter((pr) => pr.name === productName);
    this.props.onDeleteProduct(product[0]);
  }

  render() {
    return (
      <div className="basket">
        <div className="cards">
          {
            this.props.products.map(product => (
              <ShoesCard shoes={product} onDelete={this.onDeleteProduct} />
            ))
          }
        </div>
        <Orderer />
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
