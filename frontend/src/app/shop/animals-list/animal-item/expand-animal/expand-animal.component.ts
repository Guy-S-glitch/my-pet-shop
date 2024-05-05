import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
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
import { map, Subscription, switchMap, take } from "rxjs";
import { animalBoard } from "../../../store/animals-list-datasource";
import { Store } from "@ngrx/store";
import * as fromShop from "../../../../app-state/app-state.reducer";

@Component({
  selector: "app-expand-animal",
  templateUrl: "./expand-animal.component.html",
  styleUrls: ["./expand-animal.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardActions,
    MatCardSubtitle,
    MatCardContent,
    MatButton,
  ],
})
export class ExpandAnimalComponent implements OnInit, OnDestroy {
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private store: Store<fromShop.appState>
  ) {}
  centerDiv =
    "col-xs-10 col-sm-8 col-md-6 col-xs-offset-1 col-sm-offset-2 col-md-offset-3";
  index: number;
  sub: Subscription;
  selectedAnimal: animalBoard;
  ngOnInit() {
    debugger;
    this.sub = this.router.params.subscribe((params) => {
      this.index = +params["id"];
      this.store
        .select("shop")
        .pipe(
          take(1),
          map((animals) => animals.animals[this.index])
        )
        .subscribe((animal: animalBoard) => {
          this.selectedAnimal = animal;
        });
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  onSubmit() {}
  onCancel() {
    this.route.navigate(["../"], { relativeTo: this.router });
  }
}
