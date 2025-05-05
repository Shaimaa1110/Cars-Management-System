import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl:'./customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  customerData: any = null;

  errorMessage: string = '';
  constructor(private route: ActivatedRoute,private customerService:CustomersService,private router:Router) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    if (user && user.email) {
      // جلب بيانات العميل من الـ service باستخدام البريد الإلكتروني
      this.customerService.getCustomerData(user.email).subscribe(data => {
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



    /* 
    const userId=Number (this.route.snapshot.paramMap.get('id'));

    this.customerService.getCustomer(userId).subscribe({
      next: (data) => (this.customerData = data),
      error: () => (this.errorMessage = 'تعذر تحميل بيانات المستخدم', this.router.navigate(['/login']))
    });
   
 */
}


  // دالة لتوجيه المستخدم إلى صفحة تعديل الملف الشخصي
  editProfile(): void {
    this.router.navigate(['/update-customer']); // تأكد من أن المسار /edit-profile موجود
  }
}
