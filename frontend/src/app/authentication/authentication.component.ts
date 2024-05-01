import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrl: "./authentication.component.css",
})
export class AuthenticationComponent implements OnInit {
  isLoginMode = true;
  myFormGroup: FormGroup;
  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  ngOnInit(): void {
    this.myFormGroup = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  onSubmit(){
    console.log(this.myFormGroup);
  }
}
