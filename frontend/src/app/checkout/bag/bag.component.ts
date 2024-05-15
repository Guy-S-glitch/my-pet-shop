import { Store } from "@ngrx/store";
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  MatCardContent,
  MatCardModule,
  MatCardTitle,
} from "@angular/material/card";
import { animalBoard, animals } from "../../shop/store/animals-list-datasource";
import { appState } from "../../app-state/app-state.reducer";
import { map } from "rxjs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from "@angular/material/slider";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-bag",
  templateUrl: "./bag.component.html",
  styleUrls: ["./bag.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatCardTitle,
    MatCardContent,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    RouterModule,
  ],
})
export class BagComponent implements OnInit {
  constructor(
    private store: Store<appState>,
    private router: ActivatedRoute,
    private route: Router
  ) {}
  items: number = 0;
  bag: animalBoard[] = [];
  index: number;
  ngOnInit() {
    this.store
      .select("checkout")
      .pipe(map((resData) => resData.cart))
      .subscribe((bag) => {
        this.bag = bag;
        this.items = this.bag.length;
      });
  }
  view(item: animalBoard) {
    this.route.navigate(["../shop", animals.indexOf(item)], {
      relativeTo: this.router,
    });
  }
}
