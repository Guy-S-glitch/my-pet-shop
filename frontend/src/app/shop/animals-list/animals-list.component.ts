import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { animalBoard, animals } from "../store/animals-list-datasource";
import { AnimalItemComponent } from "./animal-item/animal-item.component";
import { AnimalAddComponent } from "./animal-add/animal-add.component";
import { Store } from "@ngrx/store";
import { appState } from "../../app-state/app-state.reducer";
import { map, take } from "rxjs";

@Component({
  selector: "app-animals-list",
  templateUrl: "./animals-list.component.html",
  styleUrl: "./animals-list.component.css",
  standalone: true,
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    AnimalItemComponent,
    AnimalAddComponent,
  ],
})
export class AnimalsListComponent implements OnInit {
  constructor(private store: Store<appState>) {}
  cards: animalBoard[] = [];
  ngOnInit(): void {
    this.store
      .select("shop")
      .pipe(
        take(1),
        map((resData) => resData.animals)
      )
      .subscribe((animals: animalBoard[]) => {
        this.cards = animals;
      });
  }
}
