import React, { Component } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import axios from '../../../axios';

import validation from '../../../validation/category';

class AddCategoryForm extends Component {
  state = {
    name: '',
    erName: true,
  }

  isInvalidCategoryName = (name) => {
    if (name.length < 3 || name.length > 25) {
      return 'incorrect name length';
    }
    const regexp = new RegExp('^[a-zA-Z ]*$');
    if (name.search(regexp) == -1) {
      return 'incorrect symbol in name';
    }
    return false;
  }

  onChangeName = (event) => {
    const name = event.target.value;
    if (this.isInvalidCategoryName(name)) {
      this.setState({ erName: true })
    } else {
      this.setState({
        erName: false,
      });
    }
    this.setState({ name: event.target.value });
  }

  onAddCategory = (event) => {
    const { erName } = this.state;
    if (!erName) {
      const { name } = this.state;
      if (!validation.isInvalidCategoryName(name)) {
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
      } else {
        this.setState({ erName: true });
      }
    }
  }

  render() {
    const { name, erName } = this.state;
    return (
      <div className="addShoesForm">
        <Input
          value={name}
          label="Name"
          type="text"
          name="name"
          onChange={this.onChangeName}
          error={erName}
          validationDescription="Incorrect category name"
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
