import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './dropDownMenu.css';

class DropDownMenu extends Component {
  myFunction = (event) => {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  render() {
    return (
      <div className="dropdown">
      <div onClick={this.myFunction} className="btn">Menu</div>
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
        </div>
      </div>
    );
  }
}

export default DropDownMenu;
