import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { AppComponent } from '../app.component';
import { MyDialogComponent } from '../dynamic-dialog/dialog.component';
import { SigninComponent } from '../form-component/signin.component';
import { SignupComponent } from '../form-component/signup.component';

import { DialogService } from '../dynamic-dialog/dialog.service';

@NgModule({ 
  declarations: [
    AppComponent,
    MyDialogComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    DialogModule
  ],
  entryComponents:[MyDialogComponent, SigninComponent, SignupComponent],
  bootstrap: [AppComponent],
  providers: [DialogService]
})
export class AppModule { }
