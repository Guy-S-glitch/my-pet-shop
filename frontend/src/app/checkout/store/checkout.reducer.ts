import { createReducer, on } from "@ngrx/store";
import { animalBoard } from "../../shop/store/animals-list-datasource";
import { ADD_CART, SET_CART } from "./checkout.action";

export interface State {
  cart: animalBoard[];
}
const initialState: State = {
  cart: [
    {
      name: "Aslan",
      species: "Wild Animal(mammal)",
      description:
        "Aslan is a regal male lion ruling the Serengeti plains. Known for his striking golden mane and commanding roar, he stands as a symbol of strength. As the protector of his pride, Aslan ensures their safety and leads the hunt for prey like zebras and antelopes. He embodies the spirit of the wild, maintaining the balance of his ecosystem with authority.",
      image: "https://shorturl.at/bdKMO",
    },
  ],
};
export const checkoutReducer = createReducer(
  initialState,
  on(ADD_CART, (state, action) => ({
    ...state,
    cart: [...state.cart, action.animal],
  })),
  on(SET_CART, (state, action) => ({
    ...state,
    cart: [...action.cart],
  }))
);
