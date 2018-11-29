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
    description: '',
    price: null,
    type: null,
    image: null,
    categories: null,
  }

  componentDidMount() {
    const shoesId = event.target.parentNode.getAttribute('shoesid');
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
    const { categories } = this.state;
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
              onChange={this.onChangeDescription}
            />
            <Input
              value={this.state.price}
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
