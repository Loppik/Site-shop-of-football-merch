import React from 'react';
import NavBar from '../NavBar/NavBar';
import AddShoesForm from '../AddShoesForm/AddShoesForm';
import ShoesTable from '../ShoesTable/ShoesTable';

import './admin.css';

function Admin() {
  return (
    <div className="content">
      <h1>Admin!!!</h1>
      <AddShoesForm />
      <ShoesTable />
    </div>
  );
}

export default Admin;
