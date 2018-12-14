import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import DropDownMenu from './DropDownMenu';
import Search from '../Search/Search';

import './navBar.css';

class NavBar extends Component {
  componentDidMount() {
    if (this.props.user.accessToken == undefined) {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      if (tokens != null) {
        this.props.onSignIn(tokens);
      }
    }
    if (this.props.products.length == 0) {
      const products = JSON.parse(localStorage.getItem('products'));
      if (products != null) {
        this.props.onSetProductsToBasket(products);
      }
    }
  }

  onExit = () => {
    localStorage.removeItem('tokens');
    this.props.onSignOut();
  }


  render() {
    const { accessToken } = this.props.user;
    return (
      <div className="navBar">
        <div className="menu">
          <div className="companyName">
            <Link to="/">
              <p>SS / Sport Shoes</p>
            </Link>
          </div>
          
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
            <div>
              <Link to="/">
                <div className="btn" onClick={this.onExit}>Exit</div>
              </Link>
              <DropDownMenu />
            </div>
          )
          }
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    products: state.products,
  }),
  dispatch => ({
    onSignIn: (tokens) => {
      dispatch({ type: 'SIGN_IN', tokens });
    },
    onSignOut: () => {
      dispatch({ type: 'SIGN_OUT' });
    },
    onSetProductsToBasket: (products) => {
      dispatch({ type: 'SET_PRODUCTS', products });
    },
  }),
)(NavBar);
