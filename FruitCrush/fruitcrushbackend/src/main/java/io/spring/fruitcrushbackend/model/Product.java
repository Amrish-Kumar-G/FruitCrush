package io.spring.fruitcrushbackend.model;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {
    @Id
    private int productId;
    private String productName;
    private int price;
    private String description;
    private int quantity;
    private String ImageUrl;

public Product(int productId, String productName, int price, String description, int quantity,
String ImageUrl) {
super();
this.productId = productId;
this.productName = productName;
this.price = price;
this.description = description;
this.quantity = quantity;
this.ImageUrl = ImageUrl;
}

public String productName() {
    return productName;
}
public void setproductName(String productName) {
    this.productName = productName;
}
public int getproductId() {
    return productId;
}
public void setproductId(int productId) {
    this.productId = productId;
}
public String getImageUrl() {
    return ImageUrl;
}
public void setImageUrl(String imageUrl) {
    ImageUrl = imageUrl;
}
public int getprice() {
    return price;
}
public void setprice(int price) {
    this.price = price;
}
public int getquantity() {
    return quantity;
}
public void setquantity(int quantity) {
    this.quantity = quantity;
}
public String getDescription() {
    return description;
}
public void setDescription(String description) {
    this.description = description;
}
}