import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../configs/config';
import InfoWindow from '../InfoWindow/InfoWindow';

import styles from './productBasketCard.css';

class ProductBasketCard extends Component {
  state = { shoes: null, serverInfo: '' };

  componentDidMount() {
    this.setState({ shoes: this.props.shoes });
  }

  onDeleteProduct = () => {
    const { shoes } = this.state;
    let products = JSON.parse(localStorage.getItem('products'));
    let p = products.filter(elem => elem.id !== shoes.id);
    localStorage.setItem('products', JSON.stringify(p));
    this.props.onDeleteProduct(this.state.shoes);
  }

  render() {
    const { shoes, serverInfo } = this.state;
    if (shoes == null) { return <p></p> }
    return (
      <div className={styles.card}>
        <img className={styles.image} src={`${API_URL}images/${shoes.imageName}`} />
        <div className={styles.text}>
          <Link to={`/fb/${shoes._id}`}>
            {shoes.name}
          </Link>
          <p>{shoes.description}</p>
        </div>
        <div className={styles.info}>
          { shoes.size }
        </div>
        <div className={styles.price}>
          <p>{ shoes.price }</p>
        </div>
        <button type="button" onClick={this.onDeleteProduct}>x</button>
      </div>
    );
  }
};

export default ProductBasketCard;

/*
export default connect(
  state => ({
    products: state.products,
  }),
  dispatch => ({
    onDeleteProduct: (product) => {
      dispatch({ type: 'DELETE_PRODUCT', product });
    },
  }),
)(ShoesCard);
*/
