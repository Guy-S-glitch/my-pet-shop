import { ActionReducerMap } from "@ngrx/store";
import * as fromShop from "../shop/store/shop.reducer";
import * as fromCheckout from "../checkout/store/checkout.reducer";
import * as fromDialog from "../dialog/store/dialog.reducer";

export interface appState {
  shop: fromShop.State;
  checkout: fromCheckout.State;
  dialog: fromDialog.State;
}
export const appReducer: ActionReducerMap<appState> = {
  shop: fromShop.shopReducer,
  checkout: fromCheckout.checkoutReducer,
  dialog: fromDialog.dialogReducer,
};
