
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { UserType } from '../../enums/user.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../validators.service';



@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
   

redirectToUserPage(user: User) {
  if(user.type === UserType.client) {
    this.router.navigate(['/client-profile']);
  } else if(user.type === UserType.customer) {
    this.router.navigate(['/cars-list']);
  }
}
constructor(private router:Router,private usersService:UsersService,public validatorsService: ValidatorsService ){

}


loginForm:FormGroup=this.initLoginFormGroup();
initLoginFormGroup():FormGroup{
  return new FormGroup ({
    
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', Validators.required),
  })}


  login():void{

//!this.password.trim() && !this.email.trim()
    if(this.loginForm.valid){ 
      const { email, password } = this.loginForm.value; 
      this.usersService.getUser(email,password).subscribe(user => {
      if (user) {
       alert('✅ Login success'  ); 
       this.redirectToUserPage(user)
        
      } else {
        
        alert('❌Invalid email or password');

      }
    })
   }else{
    
    alert('❌ email or password is required')
   }

}

}
