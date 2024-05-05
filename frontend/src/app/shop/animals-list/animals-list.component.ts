import { Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatGridListModule } from "@angular/material/grid-list";
import { animalBoard } from "../store/animals-list-datasource";
import { AnimalItemComponent } from "./animal-item/animal-item.component";
import { AnimalAddComponent } from "./animal-add/animal-add.component";
import { Store } from "@ngrx/store";
import { appState } from "../../app-state/app-state.reducer";
import { map, Subscription, take } from "rxjs";

@Component({
  selector: "app-animals-list",
  templateUrl: "./animals-list.component.html",
  styleUrl: "./animals-list.component.scss",
  standalone: true,
  imports: [
    MatGridListModule,
    CommonModule,
    AnimalItemComponent,
    AnimalAddComponent,
  ],
})
export class AnimalsListComponent implements OnInit, OnDestroy {
  constructor(private store: Store<appState>) {}
  cards: animalBoard[] = [];
  sub: Subscription;
  ngOnInit(): void {
    this.sub = this.store
      .select("shop")
      .pipe(
        map((resData) => resData.animals)
      )
      .subscribe((animals: animalBoard[]) => {
        this.cards = animals;
        console.log(this.cards);
        
      });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
