import { createAction, props } from "@ngrx/store";
import { animalBoard } from "../../shop/store/animals-list-datasource";
export const SET_CART = createAction(
  "[cart] Set cart",
  props<{ cart: animalBoard[] }>()
);
export const ADD_CART = createAction(
  "[cart] Add item",
  props<{ animal: animalBoard }>()
);
