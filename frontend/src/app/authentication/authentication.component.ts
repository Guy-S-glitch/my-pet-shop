import { Component } from "@angular/core";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrl: "./authentication.component.css",
})
export class AuthenticationComponent {
  isLoginMode = true;
  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
