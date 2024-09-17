package com.example.FirstApp.Services;

import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.example.FirstApp.Model.Product;

@Service
public class ProdService {

    List<Product> products = new ArrayList<>(Arrays.asList(
        new Product(101, "iPhone 14", 50000),
        new Product(102, "iPhone 15", 60000)));

    public List<Product> getProds(){
        System.out.println(products+"   "+"Service");
        return products;
    }

    public Product getProductById( int prodId){
        return products.stream().
        filter(p -> p.getProdId() == prodId)
        .findFirst()
        .orElse(new Product(prodId,"Not found",0) );
    }

    public void addProd(Product newProd) {
        products.add(newProd);
    }

}
