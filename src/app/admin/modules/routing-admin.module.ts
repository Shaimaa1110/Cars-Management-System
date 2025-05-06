import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AcceptComponent } from '../components/accept/accept.component';
import { ClientComponent } from '../components/client/client.component';
import { HomepageComponent } from '../components/layout/homepage/homepage.component';
import { ModelsComponent } from '../components/models/models.component';

const routes:Routes=[
    
 {
    path:'admin-home', 
    component:HomepageComponent,
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
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class RoutingAdminModule { }
