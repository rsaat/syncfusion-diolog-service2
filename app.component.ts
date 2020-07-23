import { Component, TemplateRef, ViewChild } from '@angular/core';
import { DialogService } from './dynamic-dialog/dialog.service';

import { MyDialogComponent } from './dynamic-dialog/dialog.component';
import { SigninComponent } from './form-component/signin.component';
import { SignupComponent } from './form-component/signup.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
  
})
export class AppComponent {


  constructor(private dialog: DialogService) { }

  showSignInDialog() {
    this.dialog.open(SigninComponent, {header: 'Sign In'});
  }

  showSignUpDialog() {
    this.dialog.open(SignupComponent, { header: 'Sign Up' });
  }
}