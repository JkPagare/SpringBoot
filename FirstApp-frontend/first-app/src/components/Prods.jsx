import React, { useEffect, useState } from "react";
import { allProdsList } from "../services/ProductDisplay";

export const Prods = () => {
    
    const [product,setProduct] = useState([])
    useEffect(()=>{
        allProdsList().then((response) =>{
            setProduct(response.data)
        }).catch(err => {
            console.error(err)
        })
    },[])
    return(
        <div className="all-products">
            <table class="table table-bordered table-hover">
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
                            <tr key= {p.prodId}>
                                <td>{p.prodId}</td>
                                <td>{p.prodName}</td>
                                <td>{p.prodPrice}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}