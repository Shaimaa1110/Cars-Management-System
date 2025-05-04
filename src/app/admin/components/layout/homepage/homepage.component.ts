import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { admin_Service } from '../../../serves.service';


@Component({
  selector: 'app-homepage',
standalone: false,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  user_name:string|null="";
 
  title = 'Cars_Management_System';
   
  constructor(private loc:admin_Service,private router: Router){

  }

  ngOnInit(): void {this.user_name=sessionStorage.getItem('username');
this.router.navigate(['/admin-home/accept']);

  }
  nav(i:any){let text = i.toString();
    sessionStorage.setItem('color',text);
    if(i==0){this.router.navigate(['/admin-home/accept']);}else if(i==1){this.router.navigate(['/admin-home/cli']);
  
    }else if(i==2){  this.router.navigate(['/admin-home/add']);
}else{ this.router.navigate(['/admin-home/models']);}
  }

  o(){

this.loc.get_data('users').subscribe((d:any)=>{console.log(d)},(e:any)=>{console.log(e)})}
}
