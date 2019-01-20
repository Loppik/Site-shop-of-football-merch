import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './dropDownMenu.css';

class DropDownMenu extends Component {
  myFunction = (event) => {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  render() {
    return (
      <div className={styles.dropdown}>
      <button onClick={this.myFunction} className={styles.dropbtn}>Menu</button>
        <div id="myDropdown" className={styles.dropdown-content}>
          <Link to="/profile">
            <p>Profile</p>
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
