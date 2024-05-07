import { createReducer, on } from "@ngrx/store";
import { animalBoard } from "../../shop/store/animals-list-datasource";
import { ADD_CART, SET_CART } from "./checkout.action";

export interface State {
  cart: animalBoard[];
}
const initialState: State = {
  cart: [],
};
export const checkoutReducer = createReducer(
  initialState,
  on(ADD_CART, (state, action) => {
    debugger;
    return { ...state, cart: [...state.cart, action.animal] };
  }),
  on(SET_CART, (state, action) => ({
    ...state,
    cart: [...action.cart],
  }))
);
