import { Store } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  MatCardContent,
  MatCardModule,
  MatCardTitle,
} from "@angular/material/card";
import { animalBoard } from "../../shop/store/animals-list-datasource";
import { appState } from "../../app-state/app-state.reducer";
import { map } from "rxjs";

@Component({
  selector: "app-bag",
  templateUrl: "./bag.component.html",
  styleUrls: ["./bag.component.scss"],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatCardTitle, MatCardContent],
})
export class BagComponent implements OnInit {
  constructor(private store: Store<appState>) {}
  items: number = 0;
  bag: animalBoard[] = [];
  ngOnInit() {
    this.store
      .select("checkout")
      .pipe(map((resData) => resData.cart))
      .subscribe((bag) => {
        debugger;
        
        this.bag = bag;
        this.items = this.bag.length;
      });
  }
}
