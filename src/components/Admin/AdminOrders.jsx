import React, { Component } from 'react';
import axios from '../../axios';

import Table from '../Table/Table';

class AdminOrders extends Component {
  state = {
    orders: []
  }

  async componentDidMount() {
    const orders = (await axios.get('orders/all')).data;
    console.log('+++++')
    console.log(orders)
    this.setState({ orders });
  }

  headers = ['Address', 'OrderDate', 'Price', 'Status'];
  buttons = [/*<Button text="Confirm" onClick={this.onReceiveOrder} />*/];

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
}

export default AdminOrders;