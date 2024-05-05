import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  MatCardContent,
  MatCardModule,
  MatCardTitle,
  
} from "@angular/material/card";
import { animalBoard } from "../../shop/store/animals-list-datasource";

@Component({
  selector: "app-bag",
  templateUrl: "./bag.component.html",
  styleUrls: ["./bag.component.scss"],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatCardTitle, MatCardContent],
})
export class BagComponent implements OnInit {
  constructor() {}
  items: number = 0;
  bag: animalBoard[] = [];
  ngOnInit() {}
}
