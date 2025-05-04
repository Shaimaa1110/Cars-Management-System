import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client-profile',
  standalone: false,
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  isDarkMode: boolean = false;
  user: any = null;

  constructor(private clientService: ClientsService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }

  loadUserData() {
    const email = localStorage.getItem('userEmail');
    if (email) {
      this.clientService.getClientByEmail(email).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          console.error('حدث خطأ أثناء تحميل بيانات المستخدم:', error);
        }
      );
    }
  }

  logout(): void {
    localStorage.clear();
    location.href = '/login';
  }
}
