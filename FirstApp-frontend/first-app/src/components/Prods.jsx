import React, { useEffect, useState } from "react";
import { allProdsList } from "../services/ProductDisplay";
import axios from "axios";
import deleteProduct from "../services/DeleteProductService";




export const Prods = () => {
  const [product, setProduct] = useState([]);

  function GetAllProds() {
    allProdsList().then((response) => {
      setProduct(response.data);
    }).catch(err => {
      console.error(err)
    })
  }

  useEffect(() => {
    GetAllProds()
  }, [])

  function handleDelete(id) {
    deleteProduct(id).then((response) => {
      GetAllProds();
    })
  }

  return (
    <div className="all-products">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            product.map(p =>
              <tr key={p.prodId}>
                <td>{p.prodId}</td>
                <td>{p.prodName}</td>
                <td>{p.prodPrice}</td>
                <td>  <button className="btn btn-danger" onClick={() => handleDelete(p.prodId)}>Delete</button>  </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}