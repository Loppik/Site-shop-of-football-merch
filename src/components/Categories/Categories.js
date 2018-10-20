import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: null
        };
    }

    async componentDidMount() {
        const categories = await axios.get('http://localhost:8081/products/');
        this.setState({
            categories: categories.data.categories,
        })
    }

    render() {
        return(
            <div>
                { this.state.categories === null && <p>Loading...</p> }
                { this.state.categories && this.state.categories.map( ct => (

                    <div key={ct.id}>
                        <Link to={`/${ct.routeName}`}>
                            <div>
                                <h1>{ct.name}</h1>
                            </div>   
                        </Link>
                    </div>
                )) 
                }
            </div>
        )
    }
}

export default Categories;