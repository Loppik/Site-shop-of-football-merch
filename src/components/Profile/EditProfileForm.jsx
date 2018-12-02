import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import './editProfileForm.css';

class EditProfileForm extends Component {
  state = {
    name: '',
    phoneNumber: '',
    address: '',
  }

  componentDidMount() {
    const { name, phoneNumber, address } = this.props;
    this.setState({
      name, phoneNumber, address,
    });
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  onChangePhoneNumber = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
  }

  onChangeAddress = (event) => {
    this.setState({
      address: event.target.value,
    });
  }

  onEditProfile = async () => {
    const response = await axios.put('users', this.state);
    if (response.status === 200) {
      this.props.onUpdateUser(response.data);
      this.props.onClose();
    }
  }

  render() {
    const { name, phoneNumber, address } = this.state;
    const { onClose } = this.props;
    return (
      <div className="editProfileForm">
        <div>
          <a title="Закрыть" class="close" onClick={onClose}>X</a>
          <Input
            value={name}
            label="Name"
            type="text"
            name="name"
            onChange={this.onChangeName}
          />
          <Input
            value={phoneNumber}
            label="Phone number"
            type="text"
            name="phoneNumber"
            onChange={this.onChangePhoneNumber}
          />
          <Input
            value={address}
            label="Address"
            type="text"
            name="address"
            onChange={this.onChangeAddress}
          />
          <Button
            text="Edit"
            onClick={this.onEditProfile}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    onUpdateUser: (user) => {
      dispatch({ type: 'ADD_USER_DATA', user });
    },
  }),
)(EditProfileForm);
