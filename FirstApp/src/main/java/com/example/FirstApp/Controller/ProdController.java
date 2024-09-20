package com.example.FirstApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FirstApp.Model.Product;
import com.example.FirstApp.Services.ProdService;

@RestController
@CrossOrigin
public class ProdController {
    
    @Autowired
    ProdService myProduct;

    @RequestMapping("/products")
    public List<Product> getProds(){
        System.out.println(myProduct.getProds()+"   "+"Controller");
        return myProduct.getProds();
    }

    @RequestMapping("/products/{prodId}")
    public Product getProdById(@PathVariable int prodId){
        return myProduct.getProductById(prodId);
    }

    @PostMapping("/addproduct")
    public String addProd(@RequestBody Product newProd){
        myProduct.addProd(newProd);
        return "Product added successfully";
    }

    @PutMapping("/updateprod")
    public void updateProd(@RequestBody Product newProd){
        myProduct.updateProd(newProd);
    }

    @DeleteMapping("/deleteprod/{prodIdToBeDeleted}")
    public void deleteProd (@PathVariable int prodIdToBeDeleted){
       myProduct.deleteProd(prodIdToBeDeleted);
    } 

}
