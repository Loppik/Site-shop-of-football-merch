import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';

import './basket.css';

import ShoesCard from './ShoesCard';

class Basket extends Component {
  state = {
    userName: '',
    phoneNumber: '',
    email: '',
    address: '',
  };

  componentDidMount() {
    this.setState({
      userName: this.props.user.name,
      phoneNumber: this.props.user.phoneNumber,
      email: this.props.user.email,
      address: this.props.user.address,
    })
  }

  onOrderShoes =  async (event) => {
    const commonPrice = this.props.products.reduce((sum, cur) => sum + cur.price, 0);
    const shoes = [];
    this.props.products.forEach((sh) => {
      shoes.push({
        shoesId: sh._id,
        size: sh.size,
      });
    });
    let order = {
      ...this.state,
      shoes,
      price: commonPrice,
      orderDate: Date.now(),
      status: 'In way',
    };
    const response = await axios.post('/orders', order);
    if (response.status === 200) {
      this.props.onDeleteProducts();
      this.setState({ serverError: 'Order accepted. Wait for delivery'});
      setTimeout(() => {
        this.setState({ serverError: ''});
      }, 3000);
    }

  }

  render() {
    console.log(this.props.products)
    return (
      <div>
        <div className="basket">
          <div className="cards">
            {
              this.props.products.map(product => (
                <ShoesCard key={product.id} shoes={product} />
              ))
            }
          </div>
          
        </div>
        <button onClick={this.onOrderShoes} className="basketBtn">To order</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    products: state.products,
  }),
  dispatch => ({
    onDeleteProducts: () => {
      dispatch({ type: 'DELETE_PRODUCTS' });
    },
  }),
)(Basket);
