import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './navBar.css';

import Basket from '../Basket/Basket';

class NavBar extends Component {
  onExit = () => {
    this.props.onSignOut();
  }


  render() {
    const { token } = this.props.user;
    return (
      <div className="navBar">
        <div className="companyName">
          <p>SS / Sport Shoes</p>
        </div>
        <Basket />
        {!token && (
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
        {token && (
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
