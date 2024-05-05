import { Component, Input, OnInit } from "@angular/core";
import { animalBoard } from "../../store/animals-list-datasource";
import { CommonModule } from "@angular/common";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
} from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";

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
    RouterModule
  ],
})
export class AnimalItemComponent implements OnInit {
  @Input() index: number;
  @Input() animal: animalBoard;
  constructor(private route: Router, private router: ActivatedRoute) {}

  ngOnInit() {  }
  expandAnimal() {
    // this.route.navigate([this.index], { relativeTo: this.router });
  }
  removeAnimal() {}
}
