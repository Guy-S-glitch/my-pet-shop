import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path:'',component:AuthenticationComponent },
  { path:'shop',component:ShopComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
