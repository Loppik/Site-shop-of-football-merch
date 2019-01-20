import React, { Component } from 'react';
import axios from '../../axios';

import Button from '../UI/Button/Button';
import Table from '../Table/Table';

import './orders.css';

class Orders extends Component {
  state = {
    orders: [],
  };

  onReceiveOrder = () => {
    
  }

  headers = ['Address', 'OrderDate', 'Price', 'Status'];
  buttons = [<Button text="received" onClick={this.onReceiveOrder} />];

  async componentDidMount() {
    const orders = (await axios.get('orders')).data;
    console.log(orders)
    this.setState({ orders });
  }
  
  render() {
    const { orders } = this.state;
    return (
      <Table
        headers={this.headers}
        objects={orders}
        buttons={this.buttons}
      />
    )
  }
};

export default Orders;
