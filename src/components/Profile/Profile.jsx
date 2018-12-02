import React, { Component } from 'react';
import { connect } from 'react-redux';

import './profile.css';

class Profile extends Component {
  state = {
    edit: false,
  }

  onEditInfo = () => {
    this.setState({ edit: true });
  }

  render() {
    const { login, name, phoneNumber, email, address } = this.props.user;
    return (
      <div className="profile">
        <div className="info">
          <p>Login: {login}</p>
          <p>Name: {name}</p>
          <p>Phone number: {phoneNumber}</p>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
        </div>
        <div className="settings" onClick={this.onEditInfo}>
          
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
)(Profile);
