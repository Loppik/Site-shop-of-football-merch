import React, { Component } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import axios from '../../../axios';

import validation from '../../../validation/category';

class AddCategoryForm extends Component {
  state = {
    name: '',
    erName: false,
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  onAddCategory = (event) => {
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
