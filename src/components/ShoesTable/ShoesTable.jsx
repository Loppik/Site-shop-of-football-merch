import React, { Component } from 'react';
import { Redirect } from 'react-router'

import Table from '../Table/Table';
import Button from '../UI/Button/Button';
import EditShoesForm from '../EditShoesForm/EditShoesForm';

import axios from '../../axios';

class ShoesTable extends Component {
  onShoesDelete = async (event) => {
    const shoesId = event.target.parentNode.getAttribute('objectid')
    //this.state.shoes.filter(shoes => )
    const response = await axios.delete('shoes/' + shoesId);
    console.log(response)
    if (response.status === 200) {
      this.componentDidMount();
    }
  }

  onShoesEdit = (event) => {
    this.setState({ edit: true });
  }

  headers = ['Name', 'Description', 'Type', 'Price'];
  buttons = [ <Button text="Edit" onClick={this.onShoesEdit} />, <Button text="Delete" onClick={this.onShoesDelete} /> ];

  state = {
    shoes: null,
    edit: false,
  }

  async componentDidMount() {
    const { shoes } = (await axios.get('shoes')).data;
    console.log(shoes);
    this.setState({ shoes });
  }

  onRefreshButtonClick = (event) => {
    this.componentDidMount();
  }

  onCloseEditForm = (event) => {
    this.setState({ edit: false });
  }

  render() {
    const { shoes, edit } = this.state;
    return (
      <div>
        <Button text="Refresh" onClick={this.onRefreshButtonClick} />
        {
          shoes && (
            <Table
              headers={this.headers}
              objects={shoes}
              buttons={this.buttons}
            />
          )
        }
        {
          edit && (
            <EditShoesForm
              onClose={this.onCloseEditForm}
            />
          )
        }
      </div>
    )
  }
};

export default ShoesTable;
