import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          login: "",
          password: ""
        };
      }

    onChangeLogin = event => {
        if (event.target.value.length > 3 && event.target.value.length < 10) {
            this.setState({
                login: event.target.value
            });
        } else {

        }
        
    }

    onChangePassword= event => {
        this.setState({
            password: event.target.value
        });
    }

    signIn = event => {
        alert("Send data: " + this.state.login + ", " + this.state.password);
    }

    render() {
        return (
            <div>
                <label>Login:</label>
                <br/>
                <input name="login" onChange={this.onChangeLogin}/> <label>{this.state.login}</label>
                <br/>
                <label>Password:</label>
                <br/>
                <input name="password" onChange={this.onChangePassword}/>
                <br/>
                <button onClick={this.signIn}>Sign in</button>
            </div>
        )
    }
}

export default Login;