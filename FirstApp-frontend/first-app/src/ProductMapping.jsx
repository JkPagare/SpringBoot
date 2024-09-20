import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductButton() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/products');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Get Products</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductButton;