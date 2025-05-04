import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { TermsComponent } from './components/terms/terms.component';

const routes:Routes=[
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'login'
    
  },
  {
    path:'login',
    component:LoginComponent
  },
  { path: 'terms', component: TermsComponent },

  {
    
    path:'signup',
    component:SignupComponent,
    canActivate:[],
    canDeactivate:[]//بدي استخدمها مع save in form update مثلا هل انت متاكد من حفظ البياناات 
  }
]

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
