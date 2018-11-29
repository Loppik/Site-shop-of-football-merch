import React from 'react';
import AddShoesForm from '../AddShoesForm/AddShoesForm';
import ShoesTable from '../ShoesTable/ShoesTable';
import AddCategoryForm from './category/AddCategoryForm';
import CategoryTable from './category/CategoryTable';

import './admin.css';

function Admin() {
  return (
    <div className="content">
      <h1>Admin!!!</h1>
      <AddShoesForm />
      <ShoesTable />
      <AddCategoryForm />
      <CategoryTable />
    </div>
  );
}

export default Admin;
