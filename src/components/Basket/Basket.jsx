import React, { Component } from 'react';
import { connect } from 'react-redux';

import './basket.css';

import ShoesCard from './ShoesCard';

class Basket extends Component {
  state = {
    
  };

  onOrderShoes =  async (event) => {
    const commonPrice = this.props.products.reduce((sum, cur) => sum + cur.price, 0);
    const shoes = [];
    this.props.products.forEach((sh) => {
      shoes.push({
        shoesId: sh._id,
        size: sh.size,
      });
    });
    let order = {
      ...this.state,
      shoes,
      price: commonPrice,
      orderDate: Date.now(),
      status: 'In way',
    };
    const response = await axios.post('/orders', order);
    if (response.status === 200) {
      this.props.onDeleteProducts();
      this.setState({ wishes: '' });
      this.setState({ serverError: 'Order accepted. Wait for delivery'});
      setTimeout(() => {
        this.setState({ serverError: ''});
      }, 3000);
    }

  }

  render() {
    console.log(this.props.products)
    return (
      <div>
        <div className="basket">
          <div className="cards">
            {
              this.props.products.map(product => (
                <ShoesCard key={product.id} shoes={product} />
              ))
            }
          </div>
          
        </div>
        <button onClick={this.onOrderShoes}>To order</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    products: state.products,
  }),
)(Basket);
