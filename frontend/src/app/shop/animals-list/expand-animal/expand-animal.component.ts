import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatButton } from "@angular/material/button";
import * as fromMatCard from "@angular/material/card";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { map, Subscription, take } from "rxjs";
import { animalBoard } from "../../store/animals-list-datasource";
import { Store } from "@ngrx/store";
import * as fromShop from "../../../app-state/app-state.reducer";
import { ADD_CART } from "../../../checkout/store/checkout.action";

@Component({
  selector: "app-expand-animal",
  templateUrl: "./expand-animal.component.html",
  styleUrls: ["./expand-animal.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    fromMatCard.MatCard,
    fromMatCard.MatCardHeader,
    fromMatCard.MatCardTitle,
    fromMatCard.MatCardActions,
    fromMatCard.MatCardSubtitle,
    fromMatCard.MatCardContent,
    MatButton,
  ],
})
export class ExpandAnimalComponent implements OnInit, OnDestroy {
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private store: Store<fromShop.appState>,
    private _snackBar: MatSnackBar
  ) {}
  centerDiv =
    "col-xs-10 col-sm-8 col-md-6 col-xs-offset-1 col-sm-offset-2 col-md-offset-3";
  index: number;
  sub: Subscription;
  selectedAnimal: animalBoard;
  ngOnInit() {
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
  AddToCart() {
    this.store.dispatch(ADD_CART({ animal: this.selectedAnimal }));
    this._snackBar.open("animal added to bag", "dismiss", {
      duration: 3000,
    });
  }
}
