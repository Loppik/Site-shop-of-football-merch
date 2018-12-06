import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';

import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Admin from '../Admin/Admin';
import Categories from '../Categories/Categories';
import FootballBoots from '../FootballBoots/FootballBoots';
import FootwearPage from '../FootwearPage/FootwearPage';
import Basket from '../Basket/Basket';
import Profile from '../Profile/Profile';
import Orders from '../Orders/Orders';

import './reset.css';

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/login" component={Login} />
      <Route exact path="/reg" component={Registration} />
      <Route exact path="/" component={Categories} />
      <Route exact path="/ct/:ctRouteName" component={FootballBoots} />
      <Route exact path="/fb/:fbId" component={FootwearPage} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/basket" component={Basket} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/orders" component={Orders} />
    </div>
  );
}


export default App;
