import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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
      erLogin: null,
      erPassword: null,
      erName: null,
      erPhoneNumber: null,
      erEmail: null,
      erAddress: null,
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
    // && !this.state.erPassword && !this.state.erPhoneNumber && this.state.erAddress && this.state.erLogin != null && this.state.erPassword != null && this.state.erPhoneNumber != null && this.state.erAddress != null
    if (!this.state.erLogin) {
      let obj = {
        login: this.state.login,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        address: this.state.address,
        name: this.state.name,
        email: this.state.email
      };
      console.log(obj);
      axios.post('http://localhost:8081/auth/reg', obj)
        .then((response) => {
          console.log(response);
          this.setState({ redirect: true, redirectPath: '/' });
        })
        .catch((err) => {
          alert(err);   // TODO: 
        })
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
        <label>Login:</label>
        <br />
        <input onChange={this.onChangeLogin} />
        {erLogin && <label>Login must contain from 3 to 15 characters</label>}
        <br />
        <label>Password:</label>
        <br />
        <input onChange={this.onChangePassword} />
        {erPassword && <label>Password must contain from 3 to 15 characters</label>}
        <br />
        <label>Name:</label>
        <br />
        <input onChange={this.onChangeName} />
        {erName && <label>Name must contain from 3 to 255 symbols</label>}
        <br />
        <label>Phone number:</label>
        <br />
        <input onChange={this.onChangePhoneNumber} />
        {erPhoneNumber && <label>Phone number must contain only digits, the number of digits must be 7</label>}
        <br />
        <label>Email:</label>
        <br />
        <input onChange={this.onChangeEmail} />
        {erEmail && <label>Incorrect Email</label>}
        <br />
        <label>Address:</label>
        <br />
        <input onChange={this.onChangeAddress} />
        {erAddress && <label>Address must contain from 5 to 255 symbols</label>}
        <button onClick={this.signUp}>Sign up</button>
      </div>
    );
  }
}

export default Registration;
