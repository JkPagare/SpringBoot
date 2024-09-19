package com.example.FirstApp.Services;

import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FirstApp.Model.Product;
import com.example.FirstApp.Repo.ProdRepository;

@Service
public class ProdService {

    @Autowired
    ProdRepository repo;

    // List<Product> products = new ArrayList<>(Arrays.asList(
    //     new Product(101, "iPhone 14", 50000),
    //     new Product(102, "iPhone 15", 60000)));

    public List<Product> getProds(){
        return repo.findAll();
    }

    public Product getProductById( int prodId){
        return repo.findById(prodId).orElse(new Product(prodId, null, 0));
    }

    public void addProd(Product newProd) {
        repo.save(newProd);
    }

    public void updateProd(Product newProd) {
        repo.save(newProd);
    }
    
    // public int findIndex(int prodId) {
    //     for (int i = 0; i < products.size(); i++) {
    //         if (products.get(i).getProdId() == prodId) {
    //             return i;
    //         }
    //     }
    //     return -1;
    // }

    public void deleteProd(int prodIdToBeDeleted) {
        repo.deleteById(prodIdToBeDeleted);
    }

}
