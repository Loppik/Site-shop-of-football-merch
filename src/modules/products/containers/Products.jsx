import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Products from '../components/products/Products';
import getProducts from '../actions/products';

const mapStateToProps = state => ({
  items: state.products.items,
  isLoading: state.products.isLoading,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetProducts: ctRouteName => dispatch(getProducts(ctRouteName)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Products));
