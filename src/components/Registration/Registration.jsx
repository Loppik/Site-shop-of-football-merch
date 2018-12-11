import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from '../../axios';

import InfoWindow from '../InfoWindow/InfoWindow';

import validation from '../../validation/validation';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      name: '',
      phoneNumber: null,
      email: '',
      address: '',
      erLogin: true,
      erPassword: true,
      erName: true,
      erPhoneNumber: true,
      erEmail: true,
      erAddress: true,
      redirect: false,
      redirectPath: null,
      serverError: '',
    };
  }

  onChangeLogin = (event) => {
    if (validation.isInvalidLogin(event.target.value)) {
      this.setState({ erLogin: true });
    } else {
      this.setState({ erLogin: false });
      this.setState({
        login: event.target.value,
      });
    }
  }

  onChangePassword = (event) => {
    if (validation.isInvalidPassword(event.target.value)) {
      this.setState({ erPassword: true });
    } else {
      this.setState({ erPassword: false });
      this.setState({
        password: event.target.value,
      });
    }
  }

  onChangeName = (event) => {
    if (validation.isInvalidName(event.target.value)) {
      this.setState({ erName: true });
    } else {
      this.setState({ erName: false });
      this.setState({
        name: event.target.value,
      });
    }
  }

  onChangePhoneNumber = (event) => {
    if (validation.isInvalidPhoneNumber(event.target.value)) {
      this.setState({ erPhoneNumber: true });
    } else {
      this.setState({ erPhoneNumber: false });
      this.setState({
        phoneNumber: parseInt(event.target.value, 10),
      });
    }
  }

  onChangeEmail = (event) => {
    if (validation.isInvalidEmail(event.target.value)) {
      this.setState({ erEmail: true });
    } else {
      this.setState({ erEmail: false });
      this.setState({
        email: event.target.value,
      });
    }
  }

  onChangeAddress = (event) => {
    if (validation.isInvalidAddress(event.target.value)) {
      this.setState({ erAddress: true });
    } else {
      this.setState({ erAddress: false });
      this.setState({
        address: event.target.value,
      });
    }
  }

  signUp = () => {
    const {
      erLogin, erPassword, erPhoneNumber, erAddress, erName, erEmail,
    } = this.state;
    if (!erLogin && !erPassword && !erPhoneNumber && !erAddress && !erName && !erEmail) {
      const { login, password, phoneNumber, address, name, email } = this.state;
      const obj = {
        login,
        password,
        phoneNumber,
        address,
        name,
        email,
      };
      console.log(obj);
      axios.post('auth/reg', obj)
        .then((response) => {
          console.log(response);
          if (Object.prototype.hasOwnProperty.call(response.data, 'err')) {
            this.setState({ serverError: response.data.err });
            setTimeout(() => {
              this.setState({ serverError: ''});
            }, 3000);
          } else {
            this.setState({ redirect: true, redirectPath: '/' });
          }
        })
        .catch((err) => {
          console.log(err);
          this.setState({ serverError: err });
        });
    } else {
      this.setState({ serverError: 'Fill in the fields'});
      setTimeout(() => {
        this.setState({ serverError: ''});
      }, 3000);
    }
  }

  render() {
    const { redirect, redirectPath, serverError } = this.state;
    if (redirect) {
      return <Redirect to={redirectPath} />;
    }

    const {
      erLogin,
      erPassword,
      erName,
      erPhoneNumber,
      erEmail,
      erAddress,
    } = this.state;
    return (
      <div>
        <label htmlFor="login">
          <p>Login:</p>
          <input type="text" id="login" onChange={this.onChangeLogin} />
        </label>
        <br />
        {erLogin && <p>Login must contain from 3 to 15 characters</p>}
        <br />
        <label htmlFor="password">
          <p>Password:</p>
          <input type="password" id="password" onChange={this.onChangePassword} />
        </label>
        <br />
        {erPassword && <p>Password must contain from 3 to 15 characters</p>}
        <br />
        <label htmlFor="name">
          <p>Name:</p>
          <input type="text" id="name" onChange={this.onChangeName} />
        </label>
        <br />
        {erName && <p>Name must contain from 3 to 255 symbols</p>}
        <br />
        <label htmlFor="phoneNumber">
          <p>Phone number:</p>
          <input type="text" id="phoneNumber" onChange={this.onChangePhoneNumber} />
        </label>
        <br />
        {erPhoneNumber && <p>Phone number must contain only digits, the number of digits must be 7</p>}
        <br />
        <label htmlFor="email">
          <p>Email:</p>
          <input type="email" id="email" onChange={this.onChangeEmail} />
        </label>
        <br />
        {erEmail && <p>Incorrect Email</p>}
        <br />
        <label htmlFor="address">
          <p>Address:</p>
          <input type="text" id="address" onChange={this.onChangeAddress} />
        </label>
        <br />
        {erAddress && <p>Address must contain from 5 to 255 symbols</p>}
        <button type="button" onClick={this.signUp}>Sign up</button>
        <InfoWindow text={serverError} />
      </div>
    );
  }
}

export default Registration;
