import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import DropDownMenu from '../UI/DropDownMenu/DropDownMenu';
import axios from '../../axios';

import './editShoesForm.css';

class EditShoesForm extends Component {
  state = {
    name: '',
    description: '',
    price: null,
    type: null,
    image: null,
    categories: null,
  }

  componentDidMount() {
    axios.get('categories').then((response) => {
      const { categories } = response.data;
      this.setState({ categories });
      this.setState({ type: categories[0].name })
    });
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  onChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  }

  onChangePrice = (event) => {
    this.setState({
      price: event.target.value,
    });
  }

  onChangeType = (event) => {
    this.setState({
      type: event.target.options[event.target.selectedIndex].text,
    });
  }

  onLoadImage = (event) => {

  }

  onEditShoes = (event) => {
    const { name, description, price, type } = this.state;
    const shoes = {
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
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        asdfasdffs
        <a href="#openModal">asdfasdf</a>
      <div id="openModal" className="editShoesForm">
        { categories && (
          <div>
            <Input
              value={this.name}
              label="Name"
              type="text"
              name="name"
              onChange={this.onChangeName}
            />
            <DropDownMenu
              options={categories}
              onChange={this.onChangeType}
            />
            <Input
              value={this.description}
              label="Description"
              type="text"
              name="description"
              onChange={this.onChangeDescription}
            />
            <Input
              value={this.price}
              label="Price"
              type="text"
              name="price"
              onChange={this.onChangePrice}
            />
            <div className="bottom-buttons">
              <div>
                <p>Image:</p>
                <Button
                  text="Load"
                  onClick={this.onLoadImage}
                />
              </div>
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
