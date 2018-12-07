import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import { API_URL } from '../../configs/config';
import './fb.css';

class FootballBoots extends Component {
  state = {
    footwear: null,
  };

  async componentDidMount() {
    const { params } = this.props.match;
    const footwear = (await axios.get(`shoes/ct/${params.ctRouteName}`));
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
            <Link to={`/fb/${ft._id}`}>
              <img className="shoesPhoto" src={`${API_URL}images/${ft.imageUrl}`} />
            </Link>
            <p className="shoesName">{ft.name}</p>
            <p className="shoesDescription">{ft.description}</p>
          </div>
        ))
        }
      </div>
    );
  }
}

export default FootballBoots;
