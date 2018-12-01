import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../UI/Input/Input';

import './orderer.css';

class Orderer extends Component {
  state = {
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    wishes: '',
  }

  componentDidMount() {
    this.setState({ ...this.props.user });
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
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

  render() {
    return (
      <div className="orderer">
        <Input
        
        />
      </div> 
    )
  }
};

export default connect(
  state => ({
    products: state.user,
  }),
)(Orderer);
