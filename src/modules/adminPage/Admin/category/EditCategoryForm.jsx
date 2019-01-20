import React, { Component } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import DropDownMenu from '../../UI/DropDownMenu/DropDownMenu';
import axios from '../../../axios';

class EditCategoryForm extends Component {
  state = {
    categoryId: null,
    name: '',
    erName: false,
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

  onEditCategory = (event) => {
    const { erName } = this.state;
    if (!erName) {
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
  }

  render() {
    const { onClose } = this.props;
    const { erName } = this.state;
    return (
      <div id="openModal" className="editShoesForm">
          <div>
            <a title="Закрыть" class="close" onClick={onClose}>X</a>
            <Input
              value={this.state.name}
              label="Name"
              type="text"
              name="name"
              error={erName}
              validationDescription="Incorrect name"
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
