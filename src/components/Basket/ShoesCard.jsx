import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './shoesCard.css';

class ShoesCard extends Component {
  state = { shoes: null };

  componentDidMount() {
    this.setState({ shoes: this.props.shoes });
  }

  onDeleteProduct = () => {
    const { shoes } = this.state;
    let products = JSON.parse(localStorage.getItem('products'));
    let p = products.filter(elem => elem.id !== shoes.id);
    localStorage.setItem('products', JSON.stringify(p));
    this.props.onDeleteProduct(this.state.shoes);
  }

  render() {
    const { shoes } = this.state;
    if (shoes == null) { return <p></p> }
    return (
      <div className="card">
        <div className="image"></div>
        <div className="text">
          <Link to={`/fb/${shoes._id}`}>
            {shoes.name}
          </Link>
          <p>{shoes.description}</p>
        </div>
        <div className="info">
          { shoes.size }
        </div>
        <div className="price">
          <p>{ shoes.price }</p>
        </div>
        <button type="button" onClick={this.onDeleteProduct}>x</button>
      </div>
    );
  }
};

export default connect(
  state => ({
    products: state.products,
  }),
  dispatch => ({
    onDeleteProduct: (product) => {
      dispatch({ type: 'DELETE_PRODUCT', product });
    },
  }),
)(ShoesCard);
