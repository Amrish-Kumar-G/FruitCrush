import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/classes/cart';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartlists?:Cart[];
  username?:String;
  constructor(private productservice:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.productservice.ViewCart().subscribe((data:any)=>{
      this.cartlists=data;
    })
  }
  placeOrder(){
    if(this.cartlists!=null){
    this.productservice.addOrder(this.cartlists).subscribe((data)=>{
      if(data){
        this.username=String(localStorage.getItem("token"));
        this.productservice.deleteCart(this.username).subscribe((data)=>{
          if(data){
            this.router.navigate(['/orders'])
          }
        })
      }
      else{
        //not
      }
    });
  }
}
}
