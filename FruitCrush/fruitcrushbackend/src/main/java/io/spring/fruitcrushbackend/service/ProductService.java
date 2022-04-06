package io.spring.fruitcrushbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.spring.fruitcrushbackend.model.Product;
import io.spring.fruitcrushbackend.repository.ProductRepository;
@Service
public class ProductService {
    @Autowired
    private ProductRepository repository;
    public Product saveProduct(Product product) {
		return repository.save(product);
	}
    public List<Product> showProduct() {
		return repository.findAll();
	}
	
	public void deleteProduct(int id) {
		repository.deleteById(id);
	}
    public Product updateProduct(Product product) {
		System.out.print(product.getproductId());
		Product existingProduct = repository.findById(product.getId()).orElse(null);
		existingProduct.setproductId(product.getproductId());
		existingProduct.setProductName(product.getProductName());
		existingProduct.setprice(product.getprice());
		existingProduct.setImageUrl(product.getImageUrl());
		existingProduct.setquantity(product.getquantity());
		return repository.save(existingProduct);
	}
}
