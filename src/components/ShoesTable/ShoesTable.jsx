import React, { Component } from 'react';

import Table from '../Table/Table';
import Button from '../UI/Button/Button';
import EditShoesForm from '../EditShoesForm/EditShoesForm';

import axios from '../../axios';

class ShoesList extends Component {
  onShoesDelete = async (event) => {
    const shoesId = event.target.parentNode.getAttribute('shoesid')
    //this.state.shoes.filter(shoes => )
    const response = await axios.delete('shoes', { body: { shoesId } });
    console.log(response)
    if (response.status === 200) {
      alert('Deleted success');
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

  render() {
    const { shoes, edit } = this.state;
    return (
      <div>
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
            <EditShoesForm />
          )
        }
      </div>
    )
  }
};

export default ShoesList;
