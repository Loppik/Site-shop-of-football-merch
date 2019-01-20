/* global localStorage:true */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from '../../axios';
import validation from '../../validation/validation';

import InfoWindow from '../InfoWindow/InfoWindow';

import './login.css';

class Login extends Component {
  state = {
    login: '',
    password: '',
    erLogin: false,
    erPassword: false,
    redirect: false,
    redirectPath: '',
    serverError: '',
  };


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

  signIn = async () => {
    const {
      erLogin,
      erPassword,
      login,
      password,
    } = this.state;

    if (validation.isInvalidLogin(login) || validation.isInvalidPassword(password)) {
      this.setState({ serverError: 'Fill in the fields'});
      setTimeout(() => {
        this.setState({ serverError: ''});
      }, 3000);
    } else {
      const obj = {
        login,
        password,
      };
      console.log(obj);
      const start = Date.now();
      let response = await axios.post('auth/login', obj)
      const end = Date.now();
      console.log(`Time: ${end - start}`);
      console.log(response);
      if (Object.prototype.hasOwnProperty.call(response.data, 'err')) {
        this.setState({ serverError: response.data.err});
        setTimeout(() => {
          this.setState({ serverError: ''});
        }, 3000);
        console.log(response.data.err);
      } else {
        this.props.onSignIn(response.data);
        localStorage.setItem('tokens', JSON.stringify(response.data));
        let user = (await axios.get('users')).data;
        this.props.onAddUserData(user);
        if (Object.prototype.hasOwnProperty.call(user, 'admin')) {
          this.setState({ redirect: true, redirectPath: '/admin' });
        } else {
          this.setState({ redirect: true, redirectPath: '/' });
        }
      }
    }
  }

  render() {
    const { redirect, redirectPath } = this.state;
    if (redirect) {
      return <Redirect to={redirectPath} />;
    }

    const { erLogin, erPassword, serverError } = this.state;
    return (
      <div className="loginForm">
        <label htmlFor="login" className="inpForm">
          <p>Login:</p>
          <input type="text" name="login" onChange={this.onChangeLogin} />
        </label>
        <br />
        {erLogin && <p className="erPC">Login must contain from 3 to 15 characters</p>}
        <br />
        <label htmlFor="password" className="inpForm">
          <p>Password:</p>
          <input name="password" type="password" onChange={this.onChangePassword} />
        </label>
        <br />
        {erPassword && <p className="erPC">Password must contain from 3 to 15 characters</p>}
        <br />
        <button type="button" onClick={this.signIn}>Sign in</button>
        <InfoWindow text={serverError} />
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    onSignIn: (tokens) => {
      dispatch({ type: 'SIGN_IN', tokens });
    },
    onAddUserData: (user) => {
      dispatch({ type: 'ADD_USER_DATA', user });
    },
  }),
)(Login);
