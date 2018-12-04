import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import axios from '../../axios';
import validation from '../../validation/validation';

import './orderer.css';

class Orderer extends Component {
  state = {
    userName: '',
    phoneNumber: '',
    email: '',
    address: '',
    wishes: '',
    erUserName: true,
    erPhoneNumber: true,
    erEmail: true,
    erAddress: true,
    erWishes: true,
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
    if (validation.isInvalidName(event.target.value)) {
      this.setState({ erUserName: true });
    } else {
      this.setState({ erUserName: false });
    }
    this.setState({ userName: event.target.value });
  }

  onChangePhoneNumber = (event) => {
    if (validation.isInvalidPhoneNumber(event.target.value)) {
      this.setState({ erPhoneNumber: true });
      this.setState({ phoneNumber: event.target.value });
    } else {
      this.setState({ erPhoneNumber: false });
      this.setState({ phoneNumber: parseInt(event.target.value, 10) });
    } 
  }

  onChangeEmail = (event) => {
    if (validation.isInvalidEmail(event.target.value)) {
      this.setState({ erEmail: true });
    } else {
      this.setState({ erEmail: false });
    }
    this.setState({ email: event.target.value });
  }

  onChangeAddress = (event) => {
    if (validation.isInvalidAddress(event.target.value)) {
      this.setState({ erAddress: true });
    } else {
      this.setState({ erAddress: false });
    }
    this.setState({ address: event.target.value });
  }

  onChangeWishes = (event) => {
    if (validation.isInvalidWishes(event.target.value)) {
      this.setState({ erWishes: true });
    } else {
      this.setState({ erWishes: false });
    }
    this.setState({ wishes: event.target.value });
  }

  onOrderShoes =  async (event) => {
    const { erUserName, erPhoneNumber, erEmail, erAddress, erWishes } = this.state;
    if (!erUserName && !erPhoneNumber && !erEmail && !erAddress && !erWishes) {
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
  }

  render() {
    const { userName, phoneNumber, email, address, wishes } = this.state;
    const { erUserName, erPhoneNumber, erEmail, erAddress, erWishes } = this.state;
    return (
      <div className="orderer">
        <Input
          value={userName}
          label="Name"
          type="text"
          name="userName"
          onChange={this.onChangeName}
          error={erUserName}
          validationDescription="Login must contain from 3 to 15 characters"
        />
        <Input
          value={phoneNumber}
          label="Phone number"
          type="text"
          name="phoneNumber"
          onChange={this.onChangePhoneNumber}
          error={erPhoneNumber}
          validationDescription="Phone number must contain only digits, the number of digits must be 7"
        />
        <Input
          value={email}
          label="Email"
          type="text"
          name="email"
          onChange={this.onChangeEmail}
          error={erEmail}
          validationDescription="Incorrect Email"
        />
        <Input
          value={address}
          label="Address"
          type="text"
          name="address"
          onChange={this.onChangeAddress}
          error={erAddress}
          validationDescription="Address must contain from 5 to 255 symbols"
        />
        <Input
          value={wishes}
          label="Wishes"
          type="text"
          name="wishes"
          onChange={this.onChangeWishes}
          error={erWishes}
          validationDescription="Wishes must contain until 100 characters"
        />
        <div className="order-btn">
          <Button
            text="Buy"
            onClick={this.onOrderShoes}
          />
        </div>
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
