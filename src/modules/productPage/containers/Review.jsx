import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Review from '../components/review/Review';
import { getReviews } from '../actions/review';

const mapStateToProps = state => ({
  items: state.reviews.items,
  isLoading: state.reviews.isLoading,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetReviews: () => dispatch(getReviews()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Review));
