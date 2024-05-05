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
import { MatError, MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map } from "rxjs";
import * as fromApp from "../../../../app-state/app-state.reducer";
import { ADD_ANIMAL } from "../../../store/shop.action";
import { animalBoard } from "../../../store/animals-list-datasource";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-new-animal",
  templateUrl: "./new-animal.component.html",
  styleUrls: ["./new-animal.component.scss"],
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
    MatInputModule,
    MatError,
    MatFormFieldModule,
  ],
})
export class NewAnimalComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private store: Store<fromApp.appState>
  ) {}
  newAnimalForm: FormGroup;
  editMode: boolean;
  index: number;
  centerDiv =
    "col-xs-10 col-sm-8 col-md-6 col-xs-offset-1 col-sm-offset-2 col-md-offset-3";
  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.index = +params["id"];
      this.editMode = params["id"] != null;
      this.initForm();
    });
  }

  initForm() {
    let name = "";
    let species = "";
    let description = "";
    let image = "";
    if (this.editMode) {
      this.store
        .select("shop")
        .pipe(
          map((State) =>
            State.animals.find((animal, index) => index === this.index)
          )
        )
        .subscribe((animal) => {
          name = animal.name;
          species = animal.species;
          description = animal.description;
          image = animal.image;
        });
    }

    this.newAnimalForm = new FormGroup({
      Name: new FormControl(name, [Validators.required]),
      Species: new FormControl(species, [Validators.required]),
      Description: new FormControl(description),
      Image: new FormControl(image, [Validators.required]),
    });
  }
  onSubmit() {
    
    if (this.editMode) {
    }
    this.store.dispatch(
      ADD_ANIMAL({ animal: this.newAnimalForm.value as animalBoard })
    );
  }
  onCancel() {
    this.route.navigate([this.editMode?"../../":"../"], { relativeTo: this.router });
  }
}
