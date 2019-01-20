import { connect } from 'react-redux';

import Basket from '../components/basket/Basket';

const mapStateToProps = state => ({
  user: state.user,
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  dispatchDeleteProducts: () => { dispatch({ type: 'DELETE_PRODUCTS' }); },
  dispatchDeleteProduct: (product) => { dispatch({ type: 'DELETE_PRODUCT', product }); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
