import React, { Component } from 'react';
import { connect } from 'react-redux';

class Basket extends Component {
  state = {
    show: true,
  };

  onShowBasket = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  }

  onDeleteProduct = (event) => {
    const { parentNode } = event.target;
    const text = parentNode.textContent;
    this.props.onDeleteProduct(text.slice(0, text.length - 1));
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onShowBasket}>Basket</button>
        {this.state.show && (
          <ul>
            {this.props.products.map((product, index) =>
              <li key={index}>{product}<button type="button" onClick={this.onDeleteProduct}>x</button></li>
            )}
          </ul>
        )
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    products: state.products,
  }),
  dispatch => ({
    onDeleteProduct: (productName) => {
      dispatch({ type: 'DELETE_PRODUCT', product: productName });
    },
  }),
)(Basket);
