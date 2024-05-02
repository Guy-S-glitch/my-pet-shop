import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
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
