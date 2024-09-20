import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetAllProds(){
  const [products, setProducts] = useState([]);
  const [isError,setError] = useState(false);

  useEffect( () =>{
      const fetchData = async() => {
          try{
                  const response = await axios.get("http://localhost:8080/products");
                  setProducts(response.data);
                  console.log(response.data);
          } catch(error){
                  console.error(error);
                  setError(true);
          }
      };
  fetchData();
  }
  )

return (
  <div>
    {isError ? (
      <p>Error fetching products!</p>
    ) : (
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    )}
  </div>
);
}

export default GetAllProds