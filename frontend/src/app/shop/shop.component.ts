import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { NewAnimalComponent } from './animals-list/animal-add/new-animal/new-animal.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  standalone:true,
  imports:[
    CommonModule,
    AnimalsListComponent,
    NewAnimalComponent,
    RouterModule
  ]
})
export class ShopComponent {

}
