import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from '../components/app/App';
import { getUserData, getProductsInBasket } from '../actions/app';

const mapDispatchToProps = dispatch => ({
  dispatchGetUserData: () => dispatch(getUserData()),
  dispatchGetProductsInBasket: () => dispatch(getProductsInBasket()),
});

export default withRouter(connect(null, mapDispatchToProps)(App));
