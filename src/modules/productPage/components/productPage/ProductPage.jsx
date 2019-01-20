import React from 'react';
import ProductInfo from '../../containers/ProductInfo';
import Review from '../../containers/Review';

const ProductPage = (props) => {
  const { match: { params } } = props;
  return (
    <div>
      <ProductInfo params={params} />
      <Review params={params} />
    </div>
  );
};

export default ProductPage;
