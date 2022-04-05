import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  tempuser:User=new User();
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
  authUser(){
    this.user.active=false;
    console.log(this.userservice.authuser(this.user).subscribe((data)=>{
      console.log(data)}));
  }
}
