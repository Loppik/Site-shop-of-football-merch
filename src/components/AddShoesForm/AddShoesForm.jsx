import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import DropDownMenu from '../UI/DropDownMenu/DropDownMenu';
import axios from '../../axios';
import request from "superagent";
import Dropzone from 'react-dropzone';

import './addShoesForm.css';

class AddShoesForm extends Component {
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

  onAddShoes = (event) => {
    const { name, description, price, type } = this.state;
    const shoes = {
      name,
      description,
      type,
      price,
    }
    console.log(shoes);
    axios.post('shoes', shoes).then((response) => {
      
    }, (err) => {
      console.log(err);
    });
  }

  onDrop = (files) => {
    const req = request.post('http://localhost:8081/images');

    files.forEach(file => {
      console.log(file);
      req.attach(file.name, file);
    });

    req.end();
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="addShoesForm">
        { categories && (
          <div>
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
                <Dropzone
                  onDrop={this.onDrop}
                />
                <Button
                  text="Load"
                  onClick={this.onLoadImage}
                />
              </div>
              <Button
                text="Add"
                onClick={this.onAddShoes}
              />
            </div>
          </div>
        )
        }
      </div>
    );
  }
}

export default AddShoesForm;
