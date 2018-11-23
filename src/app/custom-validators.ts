import {FormGroup} from '@angular/forms';

export class CustomValidators {

  public static validPassword(fg: FormGroup) {

    if (fg.controls['password'].value != fg.controls['confirmPassword'].value && fg.controls['password'].dirty && fg.controls['confirmPassword'].dirty) {
      return {diffrentPassword: true};
    } else {
      return null;
    }
  }
}
