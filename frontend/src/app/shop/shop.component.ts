import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
  standalone:true,
  imports:[
    CommonModule,
    DashboardComponent,
    NewAnimalComponent,
    RouterModule
  ]
})
export class ShopComponent {

}
