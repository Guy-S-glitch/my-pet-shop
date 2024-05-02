import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import * as fromMatCard from "@angular/material/card";

@Component({
  selector: "app-new-animal",
  templateUrl: "./new-animal.component.html",
  styleUrls: ["./new-animal.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    fromMatCard.MatCard,
    fromMatCard.MatCardHeader,
    fromMatCard.MatCardTitle,
    fromMatCard.MatCardActions,
    fromMatCard.MatCardSubtitle,
    fromMatCard.MatCardContent
    
  ],
})
export class NewAnimalComponent implements OnInit {
  constructor() {}
  newAnimalForm: FormGroup;
  centerDiv =
    "col-xs-10 col-sm-8 col-md-6 col-xs-offset-1 col-sm-offset-2 col-md-offset-3";
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newAnimalForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      species: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      image: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {}
}
