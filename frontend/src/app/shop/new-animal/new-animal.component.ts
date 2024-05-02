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
  MatCardSubtitle,
  MatCardContent,
} from "@angular/material/card";
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
    MatCardSubtitle,
    MatCardContent,
    MatButton,
  ],
})
export class NewAnimalComponent implements OnInit {
  constructor(private router:ActivatedRoute,private route:Router) {}
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
  onCancel(){
    this.route.navigate(['../'],{relativeTo:this.router})
  }
}
