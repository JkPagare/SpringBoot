import React from 'react';
import GetAllProds from '../components/GetAllProds.jsx';

function GetProductsButton() {
  return (
    <button onClick={() => <GetAllProds />}>
      Get Products
    </button>
  );
}

export default GetProductsButton;