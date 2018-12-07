import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import DropDownMenu from './DropDownMenu';
import Search from '../Search/Search';

import './navBar.css';

class NavBar extends Component {
  componentDidMount() {
    if (this.props.user.accessToken) {

    } else {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      if (tokens === null) {
      
      } else {
        this.props.onSignIn(tokens);
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
          <Link to="/basket">
            <div className="btn">Basket</div>
          </Link>
          
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
        <div>
          <Search />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    onSignIn: (tokens) => {
      dispatch({ type: 'SIGN_IN', tokens });
    },
    onSignOut: () => {
      dispatch({ type: 'SIGN_OUT' });
    },
  }),
)(NavBar);
