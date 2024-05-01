import { Routes, RouterModule } from "@angular/router";
import { AuthenticationComponent } from "./authentication/authentication.component";
import { ShopComponent } from "./shop/shop.component";
import { CartComponent } from "./cart/cart.component";

const routes: Routes = [
  { path: "", component: AuthenticationComponent },
  { path: "shop", component: ShopComponent },
  { path: "cart", component: CartComponent },
];

export const AppRoutes = RouterModule.forRoot(routes);
