/* global localStorage:true */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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

  signIn = () => {
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
      axios.post('http://localhost:8081/auth/login', obj)
        .then((response) => {
          const end = Date.now();
          console.log(`Time: ${end - start}`);
          console.log(response);
          if (Object.prototype.hasOwnProperty.call(response.data, 'err')) {
            console.log(response.data.err);
          } else {
            localStorage.setItem('token', response.data.token.token);
            if (Object.prototype.hasOwnProperty.call(response.data.user, 'admin')) {
              this.setState({ redirect: true, redirectPath: '/admin' });
            } else {
              this.setState({ redirect: true, redirectPath: '/' });
            }
          }
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

export default Login;
