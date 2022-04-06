import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminsignupComponent } from './components/adminsignup/adminsignup.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomepageComponent},
  {path:'admin/signup',component:AdminsignupComponent},
  {path:'admin/login',component:AdminloginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
