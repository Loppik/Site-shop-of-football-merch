import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import Categories from '../Categories/Categories';

class MainPage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Categories/> 
      </div>
    )
  }
}

export default MainPage;