/* global localStorage:true */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navBar.css';

import Basket from '../Basket/Basket';

class NavBar extends Component {
  onExit = () => {
    localStorage.removeItem('token');
    // rerender component
  }

  render() {
    const token = localStorage.getItem('token');
    console.log(token);
    return (
      <div className="navBar">
        <div className="companyName">
          <p>SS / Sport Shoes</p>
        </div>
        <Basket />
        {!token && (
          <div>
            <Link to="/login">
              <div className="type-1">
                <a href="/" className="btn btn-1 aa">
                  <span className="txt">Sign in</span>
                  <span className="round" />
                </a>
              </div>
            </Link>
            <Link to="/reg">
              <div className="type-1">
                <a href="/" className="btn btn-1 aa">
                  <span className="txt">Sign up</span>
                  <span className="round" />
                </a>
              </div>
            </Link>
          </div>
        )
        }
        {token && (
          <Link to="/">
            <button type="button" onClick={this.onExit}>Exit</button>
          </Link>
        )
        }

      </div>
    );
  }
}

export default NavBar;
