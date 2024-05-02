import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
  standalone:true,
  imports:[
    CommonModule,
    DashboardComponent
  ]
})
export class ShopComponent {

}
