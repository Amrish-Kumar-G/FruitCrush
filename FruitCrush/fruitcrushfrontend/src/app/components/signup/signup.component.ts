import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User=new User();
  constructor(private userservice:UserService) { }
  ngOnInit(): void {
  }
  addUser(){
    this.user.active=false;
    console.log(this.user);
    this.userservice.addUser(this.user).subscribe();
  }
}
