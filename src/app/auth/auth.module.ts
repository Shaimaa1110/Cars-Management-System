import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';  
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
 
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  declarations: [],
  exports: []
})
export class AuthModule {}