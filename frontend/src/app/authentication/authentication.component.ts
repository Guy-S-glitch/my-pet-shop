import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrl: "./authentication.component.css",
})
export class AuthenticationComponent implements OnInit {
  centerDiv =
    "col-xs-10 col-sm-8 col-md-6 col-xs-offset-1 col-sm-offset-2 col-md-offset-3";
  isLoginMode = true;
  hide = true;
  loginForm = this.formBuilder.group({
    password: [null, [Validators.required, Validators.minLength(6)]],
    email: [null, [Validators.required, Validators.email]],
  });
  constructor(private formBuilder: FormBuilder) {}
  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.loginForm);
  }
}
