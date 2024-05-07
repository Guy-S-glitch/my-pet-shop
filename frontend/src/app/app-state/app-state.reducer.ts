import { ActionReducerMap } from "@ngrx/store";
import * as fromShop from "../shop/store/shop.reducer";
import * as fromCheckout from "../checkout/store/checkout.reducer";

export interface appState {
  shop: fromShop.State;
  checkout: fromCheckout.State;
}
export const appReducer: ActionReducerMap<appState> = {
  shop: fromShop.shopReducer,
  checkout: fromCheckout.checkoutReducer,
};
