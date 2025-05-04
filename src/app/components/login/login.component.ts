import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { UserType } from '../../enums/user.enum';
import { admin_Service } from '../../admin/serves.service';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder,private Serves: admin_Service, private usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin(): void {
    const { email, password } = this.loginForm.value;

    this.usersService.getUser(email, password).subscribe((result) => {
      if (!result) {
        this.errorMessage = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
        return;
      }

      localStorage.setItem('loggedInUser', JSON.stringify(result.user));
      localStorage.setItem('userEmail', result.user.email); // لتخزين الإيميل
//this.Serves.user_name=result.user.fullName;
sessionStorage.setItem('username',result.user.fullName);
      switch (result.type) {
        case UserType.customer:
          this.router.navigate(['/cars-types']);
          break;
        case UserType.admin:
          this.router.navigate(['/admin-home']);
          break;
        case UserType.client:
          this.router.navigate(['/client-profile']);
          break;
        default:
          this.errorMessage = 'نوع مستخدم غير معروف';
          break;
      }
    });
  }
}
