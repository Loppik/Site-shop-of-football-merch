import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import NavBar from '../NavBar/NavBar';
import FootballBoots from '../FootballBoots/FootballBoots';
import Footwear from '../Footwear/Footwear';

import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Admin from '../Admin/Admin'


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/reg' component={Registration}/>
                <Route exact path='/' component={NavBar}/>
                {/* <Route exact path='/' component={FootballBoots}/> */}
                <Route exact path='/fb/:fbId' component={NavBar}/>
                <Route exact path='/fb/:fbId' component={Footwear}/>
                <Route exact path='/admin' component={NavBar}/>
                <Route exact path='/admin' component={Admin}/>
            </div>
        )
    }
}

export default App;