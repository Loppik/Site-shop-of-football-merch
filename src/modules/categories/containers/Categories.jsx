import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getCategories from '../actions/categories';
import Categories from '../components/categories/Categories';

const mapStateToProps = state => ({
  items: state.categories.items,
  isLoading: state.categories.isLoading,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetCategories: () => dispatch(getCategories()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));
