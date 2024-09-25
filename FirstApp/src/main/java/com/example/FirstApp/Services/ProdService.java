package com.example.FirstApp.Services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
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
        // return new HashSet<>(repo.findAll());
        return repo.findAllDistinctProds();
    }

    public Product getProductById( int prodId){
        return repo.findById(prodId).orElse(new Product(prodId, null, 0));
    }

    public String addProd(Product newProd) {
        try {
        repo.save(newProd);
        return "Product added successfully.";
    } catch (DataIntegrityViolationException e) {
        return "Product with name '" + newProd.getProdName() + "' already exists.";
    } catch (Exception e) {
        return "An error occurred while adding the product.";
    }
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
