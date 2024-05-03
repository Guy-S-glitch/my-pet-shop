import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { ActivatedRoute, Router } from "@angular/router";
import { animals } from "./animals-list-datasource";
import { AnimalItemComponent } from "./animal-item/animal-item.component";
import { AnimalAddComponent } from "./animal-add/animal-add.component";

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.css',
  standalone: true,
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    AnimalItemComponent,
    AnimalAddComponent
  ],
})
export class AnimalsListComponent {
  cards = [...animals]
  constructor(private route: ActivatedRoute, private router: Router) {}

  newAnimal() {
    // debugger;
    this.router.navigate(["new"], { relativeTo: this.route });
  }
  expandAnimal(index:number) {
    this.router.navigate(["expand"], { relativeTo: this.route });
  }
  removeAnimal(index:number){
    debugger;
  }
}
