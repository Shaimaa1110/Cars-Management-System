import { Component } from '@angular/core';
import { UserType } from '../../enums/user.enum';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 userType=UserType.client
}
