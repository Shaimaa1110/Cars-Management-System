import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ClientProfileComponent } from "./client-profile/client-profile.component";
import { MyRequestsComponent } from "./my-requests/my-requests.component";
import { UpdateProfileComponent } from "./update-profile/update-profile.component";

const routes:Routes=[
    
    {
      path:'client-profile',
      component:ClientProfileComponent
    },
    {
        path:'my-requests',
      component:MyRequestsComponent
    },
    {
        path:'update-profile',
        component:UpdateProfileComponent
    },
    
  ]
  
  @NgModule({
    
    imports: [
      CommonModule,
      RouterModule
      
    
    ],
    exports:[
      RouterModule
    ]
  })
  export class AppRoutingClientsModule { }
  