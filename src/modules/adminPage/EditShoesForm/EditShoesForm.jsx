import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import DropDownMenu from '../UI/DropDownMenu/DropDownMenu';
import axios from '../../axios';

import './editShoesForm.css';

class EditShoesForm extends Component {
  state = {
    shoesId: null,
    name: '',
    erName: false,
    description: '',
    erDescription: false,
    price: null,
    erPrice: false,
    type: null,
    image: null,
    categories: null,
  }

  componentDidMount() {
    const shoesId = event.target.parentNode.getAttribute('objectid');
    this.setState({ shoesId });
    axios.get('shoes/' + shoesId).then((response) => {
      const { shoes } = response.data;
      console.log(shoes)
      this.setState({
        name: shoes.name,
        description: shoes.description,
        price: shoes.price
      });
    });
    axios.get('categories').then((response) => {
      const { categories } = response.data;
      this.setState({ categories });
      this.setState({ type: categories[0].name })
    });
  }

  isInvalidShoesName = (name) => {
    if (name.length < 3 || name.length > 25) {
      return 'incorrect name length';
    }
    const regexp = new RegExp('^[a-zA-Z ]*$');
    if (name.search(regexp) == -1) {
      return 'incorrect symbol in name';
    }
    return false;
  }
  
  isInvalidShoesDescription = (description) => {
    if (description.length < 3 || description.length > 20) {
      return 'incorrect description length';
    }
    return false;
  }
  
  isInvalidShoesPrice = (price) => {
    console.log(Number(price))
    if (Number(price) === NaN) {
      console.log("++++")
      return 'incorrect price format';
    }
    return false;
  }

  onChangeName = (event) => {
    if (this.isInvalidShoesName(event.target.value)) {
      this.setState({ erName: true });
    } else {
      this.setState({ erName: false });
    }
    this.setState({
      name: event.target.value,
    });
  }

  onChangeDescription = (event) => {
    if (this.isInvalidShoesDescription(event.target.value)) {
      this.setState({ erDescription: true });
    } else {
      this.setState({ erDescription: false });
    }
    this.setState({
      description: event.target.value,
    });
  }

  onChangePrice = (event) => {
    if (this.isInvalidShoesPrice(event.target.value)) {
      this.setState({ erPrice: true });
    } else {
      this.setState({ erPrice: false });
    }
    this.setState({
      price: event.target.value,
    });
  }

  onChangeType = (event) => {
    this.setState({
      type: event.target.options[event.target.selectedIndex].text,
    });
  }

  onEditShoes = (event) => {
    const { shoesId, name, description, price, type } = this.state;
    const shoes = {
      _id: shoesId,
      name,
      description,
      type,
      price,
    }
    console.log(shoes)
    axios.put('shoes', shoes).then((response) => {
      
    }, (err) => {
      console.log(err)
    })
    this.props.onClose();
  }

  render() {
    const { categories, erName, erDescription, erPrice } = this.state;
    const { onClose } = this.props;
    return (
      <div>
      <div id="openModal" className="editShoesForm">
        { categories &&  (
          <div>
            <a title="Закрыть" class="close" onClick={onClose}>X</a>
            <Input
              value={this.state.name}
              label="Name"
              type="text"
              name="name"
              error={erName}
              validationDescription="Incorrect name format"
              onChange={this.onChangeName}
            />
            <DropDownMenu
              options={categories}
              onChange={this.onChangeType}
            />
            <Input
              value={this.state.description}
              label="Description"
              type="text"
              name="description"
              error={erDescription}
              validationDescription="Incorrect description format"
              onChange={this.onChangeDescription}
            />
            <Input
              value={this.state.price}
              label="Price"
              type="text"
              name="price"
              error={erPrice}
              validationDescription="Incorrect price format"
              onChange={this.onChangePrice}
            />
            <div className="bottom-buttons">
              <Button
                text="Edit"
                onClick={this.onEditShoes}
              />
            </div>
          </div>
        )
        }
      </div>
      </div>
    );
  }
};

export default EditShoesForm;
