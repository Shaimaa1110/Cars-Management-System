// validators.service.ts
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  // تحقق من الحقول المطلوبة
  checkValidRequired(formGroup: FormGroup, fieldName: string): boolean {
    const control = formGroup.get(fieldName);
    return control ? control.hasError('required') && control.touched : false;
  }

  // تحقق من القيم غير الصحيحة
  checkNotValidValueExternal(formGroup: FormGroup, fieldName: string): boolean {
    const control = formGroup.get(fieldName);
    return control ? control.touched && !control.valid : false;
  }

  // تحقق من القيم الصحيحة
  checkValidValueExternal(formGroup: FormGroup, fieldName: string): boolean {
    const control = formGroup.get(fieldName);
    return control ? control.touched && control.valid : false;
  }
}
