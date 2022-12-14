import { AbstractControl } from '@angular/forms';

export class PasswordMatcher {
  static match(control: AbstractControl): void | null {
    const passwordControl :any = control.get('password');
    const confirmPasswordControl:any = control.get('confirmPassword');

    if (passwordControl.pristine || confirmPasswordControl.pristine) {
      return null;
    }

    if (passwordControl.value === confirmPasswordControl.value) {
      return null;
    }

    confirmPasswordControl.setErrors({ match: true });
  }
}


