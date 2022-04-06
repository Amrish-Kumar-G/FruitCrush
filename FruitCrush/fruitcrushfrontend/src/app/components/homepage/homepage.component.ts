import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/classes/cart';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageComponent implements OnInit {
  products?:Product[];
  count=1;
  cart:Cart=new Cart();
  constructor(private productservice:ProductService) { }
  ngOnInit(): void {
    this.productservice.viewProduct().subscribe((data:any)=>{
      this.products=data;
      console.log(this.products);
    })
  }
  
  addCart(name:any,price:any,quantity:any){
      this.cart.price=price*quantity;
      this.cart.productName=name;
      this.cart.quantity=quantity;
      this.cart.username=String(localStorage.getItem("token"));
      this.productservice.countChecker(String(this.cart.username)).subscribe((data)=>{
        if(data){
          this.productservice.addCart(this.cart).subscribe();
        }else{
          console.log("cannot add product");
        }
      })
  }
}
