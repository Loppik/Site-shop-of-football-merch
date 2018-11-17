import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from '../../axios';

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
    };
  }

  onChangeLogin = (event) => {
    if (event.target.value.length > 2 && event.target.value.length < 16) {
      this.setState({ erLogin: false });
      this.setState({
        login: event.target.value,
      });
    } else {
      this.setState({ erLogin: true });
    }
  }

  onChangePassword = (event) => {
    if (event.target.value.length > 2 && event.target.value.length < 16) {
      this.setState({ erPassword: false });
      this.setState({
        password: event.target.value,
      });
    } else {
      this.setState({ erPassword: true });
    }
  }

  onChangeName = (event) => {
    if (event.target.value.length > 2 && event.target.value.length < 256) {
      this.setState({ erName: false });
      this.setState({
        name: event.target.value,
      });
    } else {
      this.setState({ erName: true });
    }
  }

  onChangePhoneNumber = (event) => {
    if (Number(event.target.value).isNuN()) {
      const phoneNumber = parseInt(event.target.value, 10);
      if (phoneNumber > 999999 && phoneNumber < 10000000) {
        this.setState({ erPhoneNumber: false });
        this.setState({
          phoneNumber: parseInt(event.target.value, 10),
        });
        return;
      }
    }
    this.setState({ erPhoneNumber: true });
  }

  onChangeEmail = (event) => {
    if (event.target.value.length > 4 && event.target.value.length < 256) {
      this.setState({ erEmail: false });
      this.setState({
        email: event.target.value,
      });
    } else {
      this.setState({ erEmail: true });
    }
  }

  onChangeAddress = (event) => {
    if (event.target.value.length > 4 && event.target.value.length < 256) {
      this.setState({ erAddress: false });
      this.setState({
        address: event.target.value,
      });
    } else {
      this.setState({ erAddress: true });
    }
  }

  signUp = () => {
    const {
      erLogin, erPassword, erPhoneNumber, erAddress, erName, erEmail,
    } = this.state;
    if (!erLogin && !erPassword && !erPhoneNumber && !erAddress && !erName && !erEmail) {
      const obj = {
        ...this.state,
      };
      console.log(obj);
      axios.post('auth/reg', obj)
        .then((response) => {
          console.log(response);
          this.setState({ redirect: true, redirectPath: '/' });
        })
        .catch((err) => {
          console.log(err); // TODO:
        });
    }
  }

  render() {
    const { redirect, redirectPath } = this.state;
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
      </div>
    );
  }
}

export default Registration;
