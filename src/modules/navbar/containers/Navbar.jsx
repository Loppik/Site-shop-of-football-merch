import { connect } from 'react-redux';

import Navbar from '../components/navbar/Navbar';

const mapStateToProps = state => ({
  userData: state.user.data,
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  onSignIn: (tokens) => { dispatch({ type: 'SIGN_IN', tokens }); },
  onSignOut: () => { dispatch({ type: 'SIGN_OUT' }); },
  onSetProductsToBasket: (products) => { dispatch({ type: 'SET_PRODUCTS', products }); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
