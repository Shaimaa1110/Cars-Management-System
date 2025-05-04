import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  customerData: any = null; // لتخزين بيانات العميل
  errorMessage: string = ''; // لتخزين رسائل الخطأ

  constructor(private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    if (user && user.email) {
      // جلب بيانات العميل من الـ service باستخدام البريد الإلكتروني
      this.usersService.getCustomerData(user.email).subscribe(data => {
        if (data) {
          this.customerData = data;
        } else {
          this.errorMessage = 'لم يتم العثور على بيانات العميل';
        }
      });
    } else {
      this.errorMessage = 'لم يتم العثور على بيانات المستخدم';
      this.router.navigate(['/login']); // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول
    }
  }

  // دالة لتوجيه المستخدم إلى صفحة تعديل الملف الشخصي
  editProfile(): void {
    this.router.navigate(['/edit-profile']); // تأكد من أن المسار /edit-profile موجود
  }
}
