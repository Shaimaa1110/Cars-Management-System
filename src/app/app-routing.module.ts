import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { TermsComponent } from './components/terms/terms.component';
import { HomepageComponent } from './admin/components/layout/homepage/homepage.component';
import { AcceptComponent } from './admin/components/accept/accept.component';
import { ClientComponent } from './admin/components/client/client.component';
import { ModelsComponent } from './admin/components/models/models.component';
import { CanActivateAdmin } from './guards/admin-guard.guard';

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
  },
  {
    path:'admin-home', 
    component:HomepageComponent,
   //canActivate:[CanActivateAdmin],
    children:[{
      path: '',
      pathMatch:'full',
      redirectTo: 'accept'
  
    },{path:'vew_client',
      component:ClientComponent},
      { path: 'accept', component:AcceptComponent  },
     
      { path: 'models', component: ModelsComponent }
     
 ],
  },
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
