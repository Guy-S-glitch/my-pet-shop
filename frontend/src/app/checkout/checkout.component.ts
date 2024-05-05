import { Component } from "@angular/core";
import { CheckoutStepper } from "./stepper/stepper.component";
import { BagComponent } from "./bag/bag.component";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrl: "./checkout.component.scss",
  standalone: true,
  imports: [CheckoutStepper, BagComponent],
})
export class CheckoutComponent {}
