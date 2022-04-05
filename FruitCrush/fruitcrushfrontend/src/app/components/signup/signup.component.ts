import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/service/user.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmValidation } from 'src/app/confirm-validation';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User=new User();
  registerForm: FormGroup =new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
    })
    title = 'validation';
    submitted = false;
  constructor(private userservice:UserService,private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.registerForm =this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      username : ['',Validators.required],
      mobilenumber:['',[Validators.required,Validators.minLength(10)]],
      confirmPassword :['',Validators.required]
    },
    {validators:[ConfirmValidation.match('password', 'confirmPassword')]}
    )
  }
  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log("invalid");
    }
    else{
      console.log("valid");
    }
}
  addUser(){
    this.user.active=false;
    console.log(this.user);
    this.userservice.addUser(this.user).subscribe();
  }
}
