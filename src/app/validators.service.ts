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
