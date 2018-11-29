import React, { Component } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import axios from '../../../axios';

class AddCategoryForm extends Component {
  state = {
    name: '',
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  onAddCategory = (event) => {
    const { name } = this.state;
    const category = {
      name,
    };
    axios.post('categories', category).then((response) => {
      if (response.status === 200) {
        this.setState({ name: '' });
      }
    }, (err) => {
      console.log(err);
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div className="addShoesForm">
        <Input
          value={name}
          label="Name"
          type="text"
          name="name"
          onChange={this.onChangeName}
        />
        <Button
          text="Add"
          onClick={this.onAddCategory}
        />
      </div>
    );
  }
}

export default AddCategoryForm;
