import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButton } from "@angular/material/button";
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardActions,
  MatCardContent,
} from "@angular/material/card";
import { MatFormField } from "@angular/material/form-field";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-new-animal",
  templateUrl: "./new-animal.component.html",
  styleUrls: ["./new-animal.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardActions,
    MatCardContent,
    MatButton,
    MatFormField,
  ],
})
export class NewAnimalComponent implements OnInit {
  constructor(private router: ActivatedRoute, private route: Router) {}
  newAnimalForm: FormGroup;
  centerDiv =
    "col-xs-10 col-sm-8 col-md-6 col-xs-offset-1 col-sm-offset-2 col-md-offset-3";
  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newAnimalForm = new FormGroup({
      Name: new FormControl(null, [Validators.required]),
      Species: new FormControl(null, [Validators.required]),
      Description: new FormControl(null),
      Image: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {}
  onCancel() {
    this.route.navigate(["../"], { relativeTo: this.router });
  }
}
