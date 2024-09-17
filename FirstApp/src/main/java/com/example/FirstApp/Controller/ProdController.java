package com.example.FirstApp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
    public String updateProd(@RequestBody Product newProd){
        boolean updateResult = myProduct.updateProd(newProd);
        if (updateResult) return newProd.getProdId()+"updated sucessfully";
        else return "Product not found :(";
    }

    @DeleteMapping("/deleteprod/{prodIdToBeDeleted}")
    public String deleteProd (@PathVariable int prodIdToBeDeleted){
        boolean deleteResult = myProduct.deleteProd(prodIdToBeDeleted);
        if (deleteResult) return prodIdToBeDeleted+" updated sucessfully";
        else return "Product not found , Not deleted :(";
    } 

}
