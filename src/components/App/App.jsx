import React from 'react';
import { Route } from 'react-router-dom';


import Navbar from '../../modules/navbar/containers/Navbar';
import Categories from '../../modules/categories/containers/Categories';
import Products from '../../modules/products/containers/Products';
import ProductPage from '../../modules/productPage/components/productPage/ProductPage';
/*
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Admin from '../Admin/Admin';

import FootballBoots from '../FootballBoots/FootballBoots';
import FootwearPage from '../FootwearPage/FootwearPage';

import Profile from '../Profile/Profile';
import Orders from '../Orders/Orders';
import SearchFootballBoots from '../SearchFootballBoots/SearchFootballBoots';
import Search from '../Search/Search';
*/
// import Basket from '../modules/basket/containers/Basket';

import './reset.css';


class App extends React.Component {
  componentDidMount() {
    const { dispatchGetUserData, dispatchGetProductsInBasket } = this.props;
    dispatchGetUserData();
    dispatchGetProductsInBasket();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component={Categories} />
        <Route exact path="/ct/:ctRouteName" component={Products} />
        <Route exact path="/fb/:fbId" component={ProductPage} />
        {/*
        
        <Search />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reg" component={Registration} />
        
        <Route exact path="/ct/:ctRouteName" component={FootballBoots} />
        <Route exact path="/find/:findText" component={SearchFootballBoots} />
        <Route exact path="/fb/:fbId" component={FootwearPage} />
        <Route exact path="/admin" component={Admin} />
        
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/basket" component={Basket} />
        */}
        
      </React.Fragment>
    );
  }
}

export default App;
