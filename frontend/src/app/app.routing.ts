import { Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { ShopComponent } from "./shop/shop.component";
import { CheckoutComponent } from "./checkout/checkout.component";

const routes: Routes = [
  { path: "", component: AuthenticationComponent },
  { path: "shop", component: ShopComponent },
  { path: "checkout", component: CheckoutComponent },
];

export const AppRoutes = RouterModule.forRoot(routes);
