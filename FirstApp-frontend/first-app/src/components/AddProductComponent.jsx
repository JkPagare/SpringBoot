import React from "react";
import AddProductService from "../services/AddProductService";
import { useState } from "react";


const AddProductComponent = () => {

    const[prodName,setProdName] = useState('')
    const[prodPrice,setProdPrice] = useState('')

    async function saveProduct(e){
        e.preventDefault();
        
        if (prodName !== '' && prodPrice !== '') {
            const product = { prodName, prodPrice };
            AddProductService(product).then(() => {
              window.location.reload(); 
            });
        } else {
          window.alert('Please fill in all fields');
        }
      }

    return (
        <>
        <div className="card " style={{width: "30rem" ,display: "flex"}} >
        <h3>Add Product</h3>
        <div class="card-body">
        <form class="form-inline">
            <label >Product Id</label>
            <input 
                type="text" 
                readOnly
                className="form-control mb-2" 
                id="Add-Prod-Name" 
                value="ProductId is Auto Generated"/>
            <label >Product Name</label>
            <input 
                type="text" 
                className="form-control mb-2" 
                id="Add-Prod-Name" 
                placeholder="Product Name"
                onChange={(e) => setProdName(e.target.value)}/>
            <label >Product Price</label>
            <input 
                type="text" 
                class="form-control mb-2" 
                id="Add-Prod-Price" 
                placeholder="Product Price"
                onChange={(e) => setProdPrice(e.target.value)}/>
            <br></br>
            <button type="submit" class="btn btn-success mb-2" onClick={saveProduct}>Add Product</button>
        </form>
        </div>
        </div>
        
        </>
    )
}

export default AddProductComponent;