import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { MatButton } from "@angular/material/button";
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardActions,
  MatCardSubtitle,
  MatCardContent,
} from "@angular/material/card";
import { ActivatedRoute, Route, Router } from "@angular/router";

@Component({
  selector: "app-expand-animal",
  templateUrl: "./expand-animal.component.html",
  styleUrls: ["./expand-animal.component.css"],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardActions,
    MatCardSubtitle,
    MatCardContent,
    MatButton,
  ],
})
export class ExpandAnimalComponent implements OnInit {
  constructor(private router: ActivatedRoute, private route: Router) {}
  newAnimalForm: FormGroup;
  centerDiv =
    "col-xs-10 col-sm-8 col-md-6 col-xs-offset-1 col-sm-offset-2 col-md-offset-3";

  initForm() {
    this.newAnimalForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      species: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      image: new FormControl(null, [Validators.required]),
    });
  }
  ngOnInit() {
    this.initForm();
  }
  onSubmit() {}
  onCancel() {
    this.route.navigate(["../"], { relativeTo: this.router });
  }
}
