import React, { Component } from 'react';

import Table from '../../Table/Table';
import Button from '../../UI/Button/Button';
import EditCategoryForm from './EditCategoryForm';

import axios from '../../../axios';

class CategoryTable extends Component {
  onCategoryDelete = async (event) => {
    const categoryId = event.target.parentNode.getAttribute('objectid');
    const response = await axios.delete('categories/' + categoryId);
    if (response.status === 200) {
      this.componentDidMount();
    }
  }

  onCategoryEdit = (event) => {
    this.setState({ edit: true });
  }

  headers = ['Name'];
  buttons = [ <Button text="Edit" onClick={this.onCategoryEdit} />, <Button text="Delete" onClick={this.onCategoryDelete} /> ];

  state = {
    categories: null,
    edit: false,
  }

  async componentDidMount() {
    const { categories } = (await axios.get('categories')).data;
    console.log(categories);
    this.setState({ categories });
  }

  onRefreshButtonClick = (event) => {
    this.componentDidMount();
  }

  onCloseEditForm = (event) => {
    this.setState({ edit: false });
  }

  render() {
    const { categories, edit } = this.state;
    return (
      <div>
        <Button text="Refresh" onClick={this.onRefreshButtonClick} />
        {
          categories && (
            <Table
              headers={this.headers}
              objects={categories}
              buttons={this.buttons}
            />
          )
        }
        {
          edit && (
            <EditCategoryForm
              onClose={this.onCloseEditForm}
            />
          )
        }
      </div>
    )
  }
};

export default CategoryTable;
