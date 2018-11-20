import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './navBar.css';

class NavBar extends Component {
  onExit = () => {
    this.props.onSignOut();
  }


  render() {
    const { accessToken } = this.props.user;
    return (
      <div className="navBar">
        <div className="companyName">
          <p>SS / Sport Shoes</p>
        </div>
        <Link to="/basket">Basket</Link>
        {!accessToken && (
          <div>
            <Link to="/login">
              <div className="btn">Sign In</div>
            </Link>
            <Link to="/reg">
              <div className="btn">Sign Up</div>
            </Link>
          </div>
        )
        }
        {accessToken && (
          <Link to="/">
            <div className="btn" onClick={this.onExit}>Exit</div>
          </Link>
        )
        }

      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    onSignOut: () => {
      dispatch({ type: 'SIGN_OUT' });
    },
  }),
)(NavBar);
