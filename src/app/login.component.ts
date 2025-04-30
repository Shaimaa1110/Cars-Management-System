
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../../services/customers.service';
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
  
   email: string='';
password: string='';
 


constructor(private router:Router,private usersService:UsersService,public validatorsService: ValidatorsService ){

}


loginForm:FormGroup=this.initLoginFormGroup();
initLoginFormGroup():FormGroup{
  return new FormGroup ({
    
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', Validators.required),
  })}


  login():void{

    if(this.password.trim()&&this.email.trim()){
     this.usersService.getUser(this.email,this.password).subscribe(user => {
      if (user) {
        this.redirectToUserPage(user)
        
        alert('✅ Login success'  );
        
      } else {
        
        alert('❌Invalid email or password');
      }
    });
    
   
   
   }else{
    alert('❌Invalid email or password')
   }

}
redirectToUserPage(user: User) {
  if(user.type === UserType.admin) {
    
  } else if (user.type === UserType.client) {

  } else if (user.type === UserType.customer) {
     
  }
}
}
