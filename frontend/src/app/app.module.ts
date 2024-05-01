import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormFieldPassword } from './authentication/form-field/password/password.component';
import { FormFieldEmail } from './authentication/form-field/email/email.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MainNavComponent, AuthenticationComponent],
  imports: [BrowserModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,FormFieldPassword,FormFieldEmail,ReactiveFormsModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
