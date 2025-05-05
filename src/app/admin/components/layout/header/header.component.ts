import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { admin_Service } from '../../../serves.service';


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  constructor(private loc:admin_Service,private router: Router){
  
  } 
  user_name: string | null = null;

  ngOnInit() {
    this.user_name = this.user_name=sessionStorage.getItem('username');
  }
  logout(){
    this.router.navigate(['/login']);
  }
}
