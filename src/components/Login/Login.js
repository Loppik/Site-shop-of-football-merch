import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          login: "",
          password: "",
          erLogin: null,
          erPassword: null,
          redirect: false,
          redirectPath: ''
        };
      }

    onChangeLogin = event => {
        if (event.target.value.length > 2 && event.target.value.length < 16) {
            this.setState({erLogin: false});
            this.setState({
                login: event.target.value
            });
        } else {
            this.setState({erLogin: true});
        }
    }

    onChangePassword = event => {
        if (event.target.value.length > 2 && event.target.value.length < 16) {
            this.setState({erPassword: false});
            this.setState({
                password: event.target.value
            });
        } else {
            this.setState({erPassword: true});
        }
    }

    signIn = event => {
        if (!this.state.erLogin && !this.state.erPassword && this.state.erLogin != null && this.state.erPassword != null) {
            let obj = {login: this.state.login, password: this.state.password};
            console.log(obj);
            axios.post('http://localhost:8081/auth/login', obj)
                .then((response) => {
                    console.log(response);
                    if (response.data.hasOwnProperty('err')) {
                        alert(response.data.err);
                    } else {
                        localStorage.setItem('token', response.data.token.token);
                        if (response.data.user.hasOwnProperty('admin')) {
                            this.setState({redirect: true, redirectPath: '/admin'});
                        } else {
                            this.setState({redirect: true, redirectPath: '/'});
                        }
                    }
                })
                .catch((err) => {
                    alert(err);   // TODO: 
                })
        }
    }

    render() {
        const {redirect, redirectPath} = this.state;
        if (redirect) {
            return <Redirect to={redirectPath}/>
        }

        return (
            <div>
                <label>Login:</label>
                <br/>
                <input name="login" onChange={this.onChangeLogin}/> { this.state.erLogin && <label>Login must contain from 3 to 15 characters</label> }
                <br/>
                <label>Password:</label>
                <br/>
                <input name="password" onChange={this.onChangePassword}/> { this.state.erPassword && <label>Password must contain from 3 to 15 characters</label> }
                <br/>
                <button onClick={this.signIn}>Sign in</button>
            </div>
        )
    }
}

export default Login;