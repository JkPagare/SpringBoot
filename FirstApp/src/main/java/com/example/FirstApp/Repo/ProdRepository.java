package com.example.FirstApp.Repo;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.FirstApp.Model.Product;

@Repository
public interface ProdRepository extends JpaRepository<Product,Integer> {
    @Query("SELECT p FROM Product p WHERE p.prodName IN (SELECT DISTINCT pn.prodName FROM Product pn)")
    List <Product> findAllDistinctProds();
}
