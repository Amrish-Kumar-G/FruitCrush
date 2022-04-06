import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Cart } from 'src/app/classes/cart';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent implements OnInit {
  orderlists?:Cart[];
  username?:String;
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.username=String(localStorage.getItem("token"));
    this.productservice.ViewOrder(this.username).subscribe((data:any)=>{
      this.orderlists=data;
    })
  }

}
