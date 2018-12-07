import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from '../../axios';

import Input from '../UI/Input/Input';
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
      this.setState({ redirect: false });
      return <Redirect to={`/find/${findText}`} />;
    }
    return (
      <div>
        <Input
          label="search"
          value={findText}
          onChange={this.onChange}
        />
        <Button
          onClick={this.onSearch}
        />
      </div>
    )
  }
}

export default Search;
