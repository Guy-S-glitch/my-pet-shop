import { Component, inject, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { AsyncPipe, CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { CheckoutComponent } from "../checkout/checkout.component";
import { RouterModule } from "@angular/router";
import { AuthenticationComponent } from "../authentication/authentication.component";
import { ShopComponent } from "../shop/shop.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatBadgeModule } from "@angular/material/badge";
import { MatMenuModule } from "@angular/material/menu";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { Store } from "@ngrx/store";
import { appState } from "../app-state/app-state.reducer";
import { animalBoard } from "../shop/store/animals-list-datasource";
import {MatAutocompleteModule} from '@angular/material/autocomplete'
@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrl: "./main-nav.component.scss",
  standalone: true,
  imports: [
    CommonModule,

    MatAutocompleteModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatInputModule,
    MatLabel,
    MatFormFieldModule,
    AsyncPipe,
    MatTooltipModule,

    AuthenticationComponent,
    CheckoutComponent,
    ShopComponent,

    RouterModule,
  ],
})
export class MainNavComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private store: Store<appState>) {}
  animals: animalBoard[] = [];
  ngOnInit(): void {
    this.store
      .select("shop")
      .pipe(map((resData) => resData.animals))
      .subscribe((list) => (this.animals = list));
  }
}
