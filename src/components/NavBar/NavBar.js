import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../styles/navBar.css';

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
            <div className="navBar">
                <div className="companyName">
                    <p>SS / Sport Shoes</p>
                </div>
                { !token && 
                    <div> 
                        <Link to='/login'>
                            <div className="type-1">
                                <a href="" className="btn btn-1 aa">
                                    <span className="txt">Sign in</span>
                                    <span className="round"></span>
                                </a>
                            </div>
                        </Link>
                        <Link to='/reg'>
                            <div className="type-1">
                                <a href="" className="btn btn-1 aa">
                                    <span className="txt">Sign up</span>
                                    <span className="round"></span>
                                </a>
                            </div>
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