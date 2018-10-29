import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../styles/categories.css'

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
            <div className="categories">
                { this.state.categories === null && <p>Loading...</p> }
                { this.state.categories && this.state.categories.map( ct => (
                    <Link to={`/${ct.routeName}`}>
                        <div key={ct._id} className="category">
                            <p className="categoryName">{ct.name}</p>
                        </div>
                    </Link>
                )) 
                }
            </div>
        )
    }
}

export default Categories;