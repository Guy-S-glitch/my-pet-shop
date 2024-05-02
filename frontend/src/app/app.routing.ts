import { Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { ShopComponent } from "./shop/shop.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { NewAnimalComponent } from "./shop/new-animal/new-animal.component";

const routes: Routes = [
  { path: "", component: AuthenticationComponent },
  {
    path: "shop",
    component: ShopComponent,
    children: [{ path: "new", component: NewAnimalComponent }],
  },
  { path: "checkout", component: CheckoutComponent },
];

export const AppRoutes = RouterModule.forRoot(routes);
