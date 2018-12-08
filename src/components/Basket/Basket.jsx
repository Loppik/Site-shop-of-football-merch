import React, { Component } from 'react';
import { connect } from 'react-redux';

import './basket.css';

import ShoesCard from './ShoesCard';
import Orderer from './Orderer';

class Basket extends Component {
  state = {
    
  };

  render() {
    console.log(this.props.products)
    return (
      <div className="basket">
        <div className="cards">
          {
            this.props.products.map(product => (
              <ShoesCard key={product.id} shoes={product} />
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
)(Basket);
