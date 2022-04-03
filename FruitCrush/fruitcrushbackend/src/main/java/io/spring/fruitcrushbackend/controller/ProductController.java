package io.spring.fruitcrushbackend.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.spring.fruitcrushbackend.model.Product;
import io.spring.fruitcrushbackend.service.ProductService;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {
    @Autowired
	private ProductService service;
    @PostMapping("/admin/addProduct")
	public Product addAcademy(@RequestBody Product product) {
		return service.saveProduct(product);
	}
	
	@GetMapping("admin/viewProduct")
	public List<Product> findProduct(){
		return service.showProduct();
	}
	
	@PutMapping("/admin/updateProduct")
	public Product updateAcademy(@RequestBody Product product){
		return service.updateAcademy(product);
	}
	
	@DeleteMapping("/admin/deleteProduct")
	public void deleteAcademy(@RequestParam int id) {
			service.deleteProduct(id);	
	}
	
	@GetMapping("/admin/getAcademy")
	public Optional<Product> getAcademyById(@RequestParam int id) {
		return service.getAcademyId(id);
	}
}
