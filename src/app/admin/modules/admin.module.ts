import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptComponent } from '../components/accept/accept.component';
import { ClientComponent } from '../components/client/client.component';
import { HeaderComponent } from '../components/layout/header/header.component';
import { HomepageComponent } from '../components/layout/homepage/homepage.component';
import { SidebarComponent } from '../components/layout/sidebar/sidebar.component';
import { ModelsComponent } from '../components/models/models.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomepageComponent,
    SidebarComponent,
    HeaderComponent,
    AcceptComponent,
    ClientComponent,
    ModelsComponent],
  imports: [  FormsModule,RouterModule,
    CommonModule
  ]
})
export class AdminModule { }
