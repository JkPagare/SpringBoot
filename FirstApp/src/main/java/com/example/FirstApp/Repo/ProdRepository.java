package com.example.FirstApp.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.FirstApp.Model.Product;

@Repository
public interface ProdRepository extends JpaRepository<Product,Integer> {
    
}
