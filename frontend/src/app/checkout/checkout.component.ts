import { Component } from '@angular/core';
import { CheckoutStepper } from './stepper/stepper.component';

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrl: "./checkout.component.scss",
  standalone:true,
  imports:[CheckoutStepper]
})
export class CheckoutComponent {
}
