import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditProfileForm from './EditProfileForm';
import {API_URL} from '../../configs/config';

import './profile.css';

class Profile extends Component {
  state = {
    edit: false,
  }

  onEditProfile = () => {
    this.setState({ edit: true });
  }

  onCloseEditProfileForm = () => {
    this.setState({ edit: false });
  }

  render() {
    const { login, name, phoneNumber, email, address } = this.props.user;
    const { edit } = this.state;
    return (
      <div className="profile">
        <div className="info">
          <p>Login: {login}</p>
          <p>Name: {name}</p>
          <p>Phone number: {phoneNumber}</p>
          <p>Email: {email}</p>
          <p>Address: {address}</p>
        </div>
        <div className="settings" onClick={this.onEditProfile}>
          <img src={`${API_URL}images/shest.png`} alt=""/>
        </div>
        {
          edit && (
            <EditProfileForm
              name={name}
              phoneNumber={phoneNumber}
              address={address}
              onClose={this.onCloseEditProfileForm}
            />
          )
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
)(Profile);
