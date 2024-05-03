import { ActionReducerMap } from "@ngrx/store";
import * as fromShop from "../shop/store/shop.reducer";

export interface appState {
  shop: fromShop.State;
}
export const appReducer: ActionReducerMap<appState> = {
  shop: fromShop.shopReducer,
};
