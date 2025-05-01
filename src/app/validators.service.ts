<<<<<<< HEAD
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
=======
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
@Injectable({
    providedIn: 'root'
})
export class ValidatorsService {
    checkValidValueExternal(formGroup: FormGroup, fieldName: string): boolean{
        return formGroup.controls[fieldName].touched && formGroup.controls[fieldName].valid
    }
    
    checkNotValidValueExternal(formGroup: FormGroup, fieldName: string): boolean{
        return formGroup.controls[fieldName].touched && !formGroup.controls[fieldName].valid
    }

    checkValidRequired(formGroup: FormGroup, fieldName: string): boolean{
        return formGroup.controls[fieldName].touched && formGroup.controls[fieldName].errors?.['required'];
    }
}
>>>>>>> 8614823595ec1cad9289d30b814be829103ff806
