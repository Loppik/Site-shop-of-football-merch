import React from 'react';

import ProductBasketCard from '../productBasketCard/ProductBasketCard';
import Orderer from '../orderer/Orderer';

import styles from './basket.css';

const Basket = ({ products }) => (
  <div className={styles.basket}>
    <div className={styles.cards}>
      {
        products.map(product => (
          <ProductBasketCard key={product.id} shoes={product} />
        ))
      }
    </div>
    <Orderer />
  </div>
);

export default Basket;
