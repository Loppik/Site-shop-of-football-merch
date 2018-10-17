/* global chrome */ 
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rerender: false
        }
    }

    onExit = event => {
        localStorage.removeItem('token');
        this.setState({rerender: true});
    }

    render() {
        const token = localStorage.getItem('token');
        console.log(token);
        return(
            <div>
                <p>NavBar text</p>
                { !token && 
                    <div> 
                        <Link to='/login'>
                            <button>Sign in</button>
                        </Link>
                        <Link to='/reg'>
                            <button>Sign up</button>
                        </Link>
                    </div>
                }
                { token && 
                    <Link to='/'>
                        <button onClick={this.onExit}>Exit</button> 
                    </Link>
                }
                
            </div>
        );
    }
}

export default NavBar;