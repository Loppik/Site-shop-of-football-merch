import React, { Component } from 'react';

import Table from '../Table/Table';

import axios from '../../axios';

class ShoesList extends Component {
  headers = ['Name', 'Description', 'Type', 'Price'];
  state = {
    shoes: null,
  }

  async componentDidMount() {
    const { shoes } = (await axios.get('shoes')).data;
    console.log(shoes);
    this.setState({ shoes });
  }

  render() {
    const { shoes } = this.state;
    return (
      <div>
        {
          shoes && (
            <Table
              headers={this.headers}
              shoes={shoes}
            />
          )
        }
      </div>
    )
  }
};

export default ShoesList;
