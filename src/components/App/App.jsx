import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';

import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Admin from '../Admin/Admin';
import MainPage from '../MainPage/MainPage';
import FootballBootsPage from '../FootballBootsPage/FootballBootsPage';
import FootwearPage from '../FootwearPage/FootwearPage';


function App() {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/reg" component={Registration} />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/fb" component={FootballBootsPage} />
      <Route exact path="/fb/:fbId" component={FootwearPage} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/forRun" component={NavBar} />

    </div>
  );
}


export default App;
