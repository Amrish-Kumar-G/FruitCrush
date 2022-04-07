import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddproductComponent implements OnInit {
  product:Product=new Product();
  produclists?:Product[];
  username?:String;
  constructor(private productservice:ProductService,private router:Router,private userservice:UserService) { }

  ngOnInit(): void {
    this.fetchdata();
  }
  fetchdata(){
    this.productservice.viewProduct().subscribe((data:any)=>{
      this.produclists=data;
      console.log(this.produclists);
    })
  }
  logout(){
    this.userservice.logout(this.username).subscribe((data)=>{
      if(data){
        localStorage.removeItem("token");
        this.pageController();
      }
    })
  }
  pageController(){
    if(!this.authState()){
      this.router.navigate(['admin/login']);
    }
  }
  authState(){
    if(localStorage.getItem("token")!=null){
      return true;
    }else{
      return false
    }
  }
  roleCheck(){
    if(this.authState()){
    this.userservice.typeofUser(this.username).subscribe((data)=>{
      if(data=="user"){
        this.router.navigate(['home']);
      }
    })
  }else{
    this.router.navigate(['admin/login']);
  }
}
}
