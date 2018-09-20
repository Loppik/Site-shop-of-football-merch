import React, {Component} from 'react';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
          login: "",
          password: "",
          phoneNumber: null,
          address: ""
        };
      }

    onChangeLogin = event => {
        this.setState({
            login: event.target.value
        });
    }

    onChangePassword = event => {
        this.setState({
            password: event.target.value
        });
    }

    onChangePhoneNumber = event => {
        this.setState({
            phoneNumber: event.target.value
        });
    }

    onChangeAddress = event => {
        this.setState({
            address: event.target.value
        });
    }

    signUp = event => {
        alert("Send data: " + this.state.login + ", " + this.state.password + ", " + this.state.phoneNumber + ", " + this.state.address);
    }

    render() {
        return (
            <div>
                <input onChange={this.onChangeLogin}/>
                <br/>
                <input onChange={this.onChangePassword}/>
                <br/>
                <input onChange={this.onChangePhoneNumber}/>
                <br/>
                <input onChange={this.onChangeAddress}/>
                <button onClick={this.signUp}>Sign up</button>
            </div>
        )
    }
}

export default Registration;