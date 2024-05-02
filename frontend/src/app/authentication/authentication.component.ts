import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrl: "./authentication.component.css",
  standalone: true,
  imports: [
    MatCard,
    MatCardActions,
    MatLabel,
    MatFormField,
    MatIcon,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatInputModule,
    MatButtonModule,
    MatError,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
})
export class AuthenticationComponent implements OnInit {
  centerDiv =
    "col-xs-10 col-sm-8 col-md-6 col-xs-offset-1 col-sm-offset-2 col-md-offset-3";
  isLoginMode = true;
  hide = true;
  myLoginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myLoginForm = this.formBuilder.group({
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required,
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
    });
  }
  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.myLoginForm);
  }
}
