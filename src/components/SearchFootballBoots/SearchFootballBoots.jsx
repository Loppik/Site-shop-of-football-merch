import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from '../../axios';
import './searchFootballBoots.css';
import { API_URL } from '../../configs/config';

class SearchFootballBoots extends Component {
  state = {
    footwear: null,
    text: '',
  };

  async componentDidMount() {
    this.setState({ text: this.props.findText });
    if (this.props.findText != '') {
      const footwear = await axios.get(`shoes/find/${this.props.findText}`);
      this.setState({
        footwear: footwear.data.shoes,
      });
    }
  }

  render() {
    const { footwear, text } = this.state;
    const { findText } = this.props;
    if (text != findText) { this.componentDidMount() } 
    return (
      <div className="fbs">
        {footwear && footwear.map(ft => (
          <div key={ft._id} className="fb">
            <img className="shoesPhoto" src={`${API_URL}images/${ft.imageName}`} />
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

export default connect(
  state => ({
    findText: state.findText,
  }),
)(SearchFootballBoots);
