import React, { Component } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import DropDownMenu from '../../UI/DropDownMenu/DropDownMenu';
import axios from '../../../axios';

class EditCategoryForm extends Component {
  state = {
    categoryId: null,
    name: '',
  }

  componentDidMount() {
    const categoryId = event.target.parentNode.getAttribute('objectid');
    this.setState({ categoryId });
    axios.get('categories/' + categoryId).then((response) => {
      const { category } = response.data;
      this.setState({
        name: category.name,
      });
    });
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  onEditCategory = (event) => {
    const { categoryId, name } = this.state;
    const category = {
      _id: categoryId,
      name,
    };
    axios.put('categories', category).then((response) => {
      
    }, (err) => {
      console.log(err)
    })
    this.props.onClose();
  }

  render() {
    const { onClose } = this.props;
    return (
      <div id="openModal" className="editShoesForm">
          <div>
            <a title="Закрыть" class="close" onClick={onClose}>X</a>
            <Input
              value={this.state.name}
              label="Name"
              type="text"
              name="name"
              onChange={this.onChangeName}
            />
            <Button
              text="Edit"
              onClick={this.onEditCategory}
            />
          </div>
      </div>
    );
  }
};

export default EditCategoryForm;
