import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import './categories.css';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
    };
  }

  async componentDidMount() {
    const categories = await axios.get('categories/');
    this.setState({
      categories: categories.data.categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="categories">
        {categories && categories.map(ct => (
          <Link to={`/ct/${ct.routeName}`}>
            <div key={ct._id} className="category">
              <p className="categoryName">{ct.name}</p>
            </div>
          </Link>
        ))
        }
      </div>
    );
  }
}

export default Categories;
