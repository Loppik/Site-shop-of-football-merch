import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from '../components/login/Login';

const mapStateToProps = state => ({
  items: state.categories.items,
  isLoading: state.categories.isLoading,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetCategories: () => dispatch(getCategories()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
