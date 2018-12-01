import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import axios from '../../axios';

import './orderer.css';

class Orderer extends Component {
  state = {
    userName: '',
    phoneNumber: '',
    email: '',
    address: '',
    wishes: '',
  }

  componentDidMount() {
    this.setState({
      userName: this.props.user.name,
      phoneNumber: this.props.user.phoneNumber,
      email: this.props.user.email,
      address: this.props.user.address,
    });
  }

  onChangeName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  }

  onChangePhoneNumber = (event) => {
    this.setState({
      phoneNumber: parseInt(event.target.value, 10),
    });
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  onChangeAddress = (event) => {
    this.setState({
      address: event.target.value,
    });
  }

  onChangeWishes = (event) => {
    this.setState({
      wishes: event.target.value,
    });
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
      this.setState({ wishes: '' });
    }
  }

  render() {
    const { userName, phoneNumber, email, address, wishes } = this.state;

    return (
      <div className="orderer">
        <Input
          value={userName}
          label="Name"
          type="text"
          name="userName"
          onChange={this.onChangeName}
        />
        <Input
          value={phoneNumber}
          label="Phone number"
          type="text"
          name="phoneNumber"
          onChange={this.onChangePhoneNumber}
        />
        <Input
          value={email}
          label="Email"
          type="text"
          name="email"
          onChange={this.onChangeEmail}
        />
        <Input
          value={address}
          label="Address"
          type="text"
          name="address"
          onChange={this.onChangeAddress}
        />
        <Input
          value={wishes}
          label="Wishes"
          type="text"
          name="wishes"
          onChange={this.onChangeWishes}
        />
        <Button
          text="Buy"
          onClick={this.onOrderShoes}
        />
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
)(Orderer);
