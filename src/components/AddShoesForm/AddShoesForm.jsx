import React, { Component, Fragment } from 'react';
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
    erName: true,
    description: '',
    erDescription: true,
    price: null,
    erPrice: true,
    type: null,
    imageName: null,
    imageLoading: false,
    categories: null,
  }

  componentDidMount() {
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

  onLoadImage = (event) => {

  }

  onAddShoes = (event) => {
    const { name, description, price, type, imageName } = this.state;
    const shoes = {
      name,
      description,
      type,
      price,
      imageName,
    }
    console.log(shoes);
    axios.post('shoes', shoes).then((response) => {
      
    }, (err) => {
      console.log(err);
    });
  }

  onDrop = (files) => {
    const req = request.post('http://localhost:8081/images');

    req.attach(files[0].name, files[0]);
    this.setState({ imageLoading: true });
    req.end((err, res)  => {
      this.setState({ imageName: files[0].name, imageLoading: false });
    });
  }

  render() {
    const previewStyle = {
      display: 'inline',
      width: 100,
      height: 100,
    };

    const { categories, imageName, imageLoading, erDescription, erName, erPrice } = this.state;
    return (
      <div className="addShoesForm">
        { categories && (
          <div>
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
              <div>
                <p>Image:</p>
                {
                  imageName && <p>Loaded</p>
                }
                {
                  imageName == null && (
                    <Dropzone
                      accept=".jpg"
                      onDrop={this.onDrop}
                    />
                  )
                }
                {
                  imageLoading && <p>Loading</p>
                }
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
