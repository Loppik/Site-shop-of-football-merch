import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProductInfo from '../components/productInfo/ProductInfo';
import { getProduct, getSizes } from '../actions/productInfo';

const mapStateToProps = state => ({
  productData: state.product.data,
  sizes: state.product.sizes,
  isLoading: state.product.isLoading,
});

const mapDispatchToProps = dispatch => ({
  onAddProductToBasket: product => dispatch({ type: 'ADD_PRODUCT', product }),
  dispatchGetProduct: productId => dispatch(getProduct(productId)),
  dispatchGetSizes: productId => dispatch(getSizes(productId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductInfo));
