import React from 'react';
import AddShoesForm from '../AddShoesForm/AddShoesForm';
import ShoesTable from '../ShoesTable/ShoesTable';
import AddCategoryForm from './category/AddCategoryForm';
import CategoryTable from './category/CategoryTable';

import './admin.css';

function Admin() {
  return (
    <div className="content">
      <AddShoesForm />
      <ShoesTable />
      <AddCategoryForm />
      <CategoryTable />
    </div>
  );
}

export default Admin;
