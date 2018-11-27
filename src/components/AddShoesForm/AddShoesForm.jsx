import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import DropDownMenu from '../UI/DropDownMenu/DropDownMenu';

import './addShoesForm.css';

class AddShoesForm extends Component {
  state = {
    inputNameData: {
      labelName: 'Name',
      type: 'text',
      name: 'name',
    },
    inputDescriptionData: {
      labelName: 'Description',
      type: 'text',
      name: 'description',
    },
    inputPriceData: {
      labelName: 'Price',
      type: 'text',
      name: 'price',
    },
    buttonLoadData: {
      text: 'Load',
    },
    buttonAddData: {
      text: 'Add',
    },
    selectMenuData: {
      options: [
        {
          text: 'opt1',
        },
        {
          text: 'opt2',
        },
      ],
    },
  }

  render() {
    return (
      <div className="addShoesForm">
        <Input data={this.state.inputNameData} />
        <DropDownMenu data={this.state.selectMenuData}/>
        <Input data={this.state.inputDescriptionData} />
        <Input data={this.state.inputPriceData} />
        <div className="bottom-buttons">
          <div>
            <p>Image:</p>
            <Button data={this.state.buttonLoadData} /> 
          </div>
          <Button data={this.state.buttonAddData} />
        </div>
      </div>
    );
  }
}

export default AddShoesForm;
