import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../UI/Button/Button';

import './search.css';

class Search extends Component {
  state = {
    findText: '',
    redirect: false,
    r: false,
  }

  onChange = (event) => {
    this.setState({ findText: event.target.value }) 
  }

  onSearch = async (event) => {
    this.setState({ redirect: true });
  }

  render() {
    const { findText, redirect } = this.state;
    if (redirect) {
      this.props.onSetFindText(findText);
      this.setState({ redirect: false, findText: '' });
      return <Redirect to={`/find/${findText}`} />;
    }
    return (
      <div className="search">
        <input value={findText} onChange={this.onChange} />
        <div className="searchBtn">
          <Button
            text="Search"
            onClick={this.onSearch}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    findText: state.findText,
  }),
  dispatch => ({
    onSetFindText: (findText) => {
      dispatch({ type: 'SET_FINDTEXT', findText });
    },
  }),
)(Search);
