import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  standalone: false,
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  user: any = {
    fullName: '',
    email: '',
    phone: '',
    address: {
      country: '',
      city: ''
    }
  };

  fieldErrors = {
    fullName: false,
    phone: false,
    country: false,
    city: false
  };

  constructor(private clientsService: ClientsService, private router: Router) {}

  ngOnInit(): void {
    const email = localStorage.getItem('userEmail');
    if (email) {
      this.clientsService.getClientByEmail(email).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          console.error('حدث خطأ أثناء جلب بيانات العميل:', error);
        }
      );
    }
  }

  updateProfile(): void {
    let isValid = true;

    // التحقق من الحقول الأساسية
    if (!this.user.fullName || this.user.fullName.trim() === '') {
      this.fieldErrors.fullName = true;
      isValid = false;
    } else {
      this.fieldErrors.fullName = false;
    }

    if (!this.user.phone || this.user.phone.trim() === '') {
      this.fieldErrors.phone = true;
      isValid = false;
    } else {
      this.fieldErrors.phone = false;
    }

    if (!this.user.address.country || this.user.address.country.trim() === '') {
      this.fieldErrors.country = true;
      isValid = false;
    } else {
      this.fieldErrors.country = false;
    }

    if (!this.user.address.city || this.user.address.city.trim() === '') {
      this.fieldErrors.city = true;
      isValid = false;
    } else {
      this.fieldErrors.city = false;
    }

    if (isValid) {
      this.clientsService.updateClient(this.user.id, this.user).subscribe(
        () => {
          alert('✅ تم تحديث البيانات بنجاح');
          this.router.navigate(['/client-profile']);
        },
        (error) => {
          console.error('❌ خطأ أثناء تحديث البيانات:', error);
        }
      );
    }
  }
}
