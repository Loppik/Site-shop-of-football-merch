import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './dropDownMenu.css';

class DropDownMenu extends Component {
  myFunction = (event) => {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  onExit = () => {
    localStorage.removeItem('tokens');
    this.props.onSignOut();
  }

  render() {
    const { user } = this.props;
    return (
      <div className="dropdown">
      <div onClick={this.myFunction} className="btn">{ user.login }</div>
        <div id="myDropdown" className="dropdown-content">
          <Link to="/profile">
            <p>Profile</p>
          </Link>
          <Link to="/basket">
            <p>Basket</p>
          </Link>
          <Link to="/orders">
            <p>Orders</p>
          </Link>
          <a href="#">
            <p onClick={this.onExit}>Exit</p>
          </a>
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
    onSignOut: () => {
      dispatch({ type: 'SIGN_OUT' });
    },
  }),
)(DropDownMenu);
