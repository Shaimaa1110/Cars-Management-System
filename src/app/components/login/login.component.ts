
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
    localStorage.setItem('loggedInUser', JSON.stringify(user));
      localStorage.setItem('userEmail',user.email);
  if (user.type === UserType.admin) {
    sessionStorage.setItem('username',user.fullName);
    this.router.navigate(['/admin-home']);
  } else if (user.type === UserType.client) {
    this.router.navigate(['/client-profile']);
  } else if (user.type === UserType.customer) {
    this.router.navigate(['/cars-list']);
  } else {
    alert('❌ نوع مستخدم غير معروف');
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
      this.usersService.getUsers(email,password).subscribe(user => {
      if (user) {
       alert('✅ نجاح تسجيل الدخول'  ); 
       this.redirectToUserPage(user)
      
        
      } else {
        
        alert('❌البريد الإلكتروني أو كلمة المرور غير صالحة');

      }
    })
   }else{
    
    alert('❌ مطلوب البريد الإلكتروني أو كلمة المرور')
   }

}

}
