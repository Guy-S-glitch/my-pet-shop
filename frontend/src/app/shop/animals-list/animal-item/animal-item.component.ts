import { Store } from "@ngrx/store";
import { Component, Input, OnInit } from "@angular/core";
import { animalBoard } from "../../store/animals-list-datasource";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { appState } from "../../../app-state/app-state.reducer";
import { REMOVE_ANIMAL } from "../../store/shop.action";
import { map, take } from "rxjs";

@Component({
  selector: "app-animal-item",
  templateUrl: "./animal-item.component.html",
  styleUrls: ["./animal-item.component.scss"],
  standalone: true,
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    RouterModule,
  ],
})
export class AnimalItemComponent implements OnInit {
  @Input() index: number;
  @Input() animal: animalBoard;
  // pla: animalBoard;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private store: Store<appState>
  ) {}

  ngOnInit() {
    // this.store
    //   .select("shop")
    //   .pipe(map((res) => res.animals))
    //   .subscribe((ani) => (this.pla = ani[this.index]));
    // console.log(this.pla.name);
    //     console.log(this.pla);

  }

  expandAnimal() {
    // this.route.navigate([this.index], { relativeTo: this.router });
  }
  removeAnimal() {
    this.store.dispatch(REMOVE_ANIMAL({ index: this.index }));
    this.route.navigate(["shop"]);
  }
}
