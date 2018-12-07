import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import './searchFootballBoots.css';

class SearchFootballBoots extends Component {
  state = {
    footwear: null,
  };

  async componentDidMount() {
    const { params } = this.props.match;
    const footwear = await axios.get(`shoes/find/${params.findText}`);
    this.setState({
      footwear: footwear.data.shoes,
    });
  }

  render() {
    const { footwear } = this.state;
    return (
      <div className="fbs">
        {footwear && footwear.map(ft => (
          <div key={ft._id} className="fb">
            <div className="shoesPhoto" />
            <Link to={`/fb/${ft._id}`}>
              <p className="shoesName">{ft.name}</p>
            </Link>
            <p className="shoesDescription">{ft.description}</p>
          </div>
        ))
        }
      </div>
    );
  }
}

export default SearchFootballBoots;