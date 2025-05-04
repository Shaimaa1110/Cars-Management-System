import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { admin_Service } from '../../../serves.service';


@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  list:string[]=['Review Request','View Client','Models']
  constructor(private Serves:admin_Service,private router: Router){

}  cor=0;
nav(i:any){this.cor=i;
  if(i==0){this.router.navigate(['/admin-home/accept']);}else if(i==1){this.router.navigate(['/admin-home/vew_client']);

  }else{this.router.navigate(['/admin-home/models']);}
}
color2(i: any): string {
  if (i === this.cor) {
    return "font-size: 20px; margin-bottom: 15px; cursor: pointer; color:rgb(105, 102, 102);"; 
  } else {
    return "font-size: 20px; margin-bottom: 15px; cursor: pointer; color: white;";
  }
}

  
}
