import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import validation from '../../validation/validation';

import './editProfileForm.css';

class EditProfileForm extends Component {
  state = {
    name: '',
    phoneNumber: '',
    address: '',
    erName: false,
    erPhoneNumber: false,
    erAddress: false,
  }

  componentDidMount() {
    const { name, phoneNumber, address } = this.props;
    this.setState({
      name, phoneNumber, address,
    });
  }

  onChangeName = (event) => {
    if (validation.isInvalidName(event.target.value)) {
      this.setState({ erName: true });
    } else {
      this.setState({ erName: false });
    }
    this.setState({ name: event.target.value });
  }

  onChangePhoneNumber = (event) => {
    if (validation.isInvalidPhoneNumber(event.target.value)) {
      this.setState({ erPhoneNumber: true });
    } else {
      this.setState({ erPhoneNumber: false });
    }
    this.setState({ phoneNumber: event.target.value });
  }

  onChangeAddress = (event) => {
    if (validation.isInvalidAddress(event.target.value)) {
      this.setState({ erAddress: true });
    } else {
      this.setState({ erAddress: false });
    }
    this.setState({ address: event.target.value });
  }

  onEditProfile = async () => {
    const { erName, erPhoneNumber, erAddress } = this.state;
    if (!erName && !erPhoneNumber && !erAddress) {
      const response = await axios.put('users', this.state);
      if (response.status === 200) {
        this.props.onUpdateUser(response.data);
        this.props.onClose();
      }
    }
  }

  render() {
    const { name, phoneNumber, address } = this.state;
    const { erName, erPhoneNumber, erAddress } = this.state;
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
            error={erName}
            validationDescription="Name must contain from 3 to 255 symbols"
          />
          <Input
            value={phoneNumber}
            label="Phone number"
            type="text"
            name="phoneNumber"
            onChange={this.onChangePhoneNumber}
            error={erPhoneNumber}
            validationDescription="Phone number must contain only digits, the number of digits must be 7"
          />
          <Input
            value={address}
            label="Address"
            type="text"
            name="address"
            onChange={this.onChangeAddress}
            error={erAddress}
            validationDescription="Address must contain from 5 to 255 symbols"
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
