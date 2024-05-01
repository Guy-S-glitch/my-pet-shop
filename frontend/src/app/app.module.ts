import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { ShopComponent } from "./shop/shop.component";
import { CheckoutComponent } from "./checkout/checkout.component";

import { AuthenticationComponent } from "./authentication/authentication.component";
import { MatFormField } from "@angular/material/form-field";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { AppRoutes } from "./app.routing";
import { MatStepperModule } from "@angular/material/stepper";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { CheckoutStepper } from "./checkout/stepper/stepper.component";

import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { AddressFormComponent } from "./checkout/address-form/address-form.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    CheckoutComponent,
    ShopComponent,
    AddressFormComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutes,

    CheckoutStepper,

    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormField,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatNativeDateModule,
    MatStepperModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
