/* global localStorage:true */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from '../../axios';
import validation from '../../validation/validation';

class Login extends Component {
  state = {
    login: '',
    password: '',
    erLogin: true,
    erPassword: true,
    redirect: false,
    redirectPath: '',
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

    if (!erLogin && !erPassword) {
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

    const { erLogin, erPassword } = this.state;
    return (
      <div>
        <label htmlFor="login">
          <p>Login:</p>
          <input type="text" name="login" onChange={this.onChangeLogin} />
        </label>
        <br />
        {erLogin && <p>Login must contain from 3 to 15 characters</p>}
        <br />
        <label htmlFor="password">
          <p>Password:</p>
          <input name="password" type="password" onChange={this.onChangePassword} />
        </label>
        <br />
        {erPassword && <p>Password must contain from 3 to 15 characters</p>}
        <br />
        <button type="button" onClick={this.signIn}>Sign in</button>
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
