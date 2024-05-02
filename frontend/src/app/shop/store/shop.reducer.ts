import { createReducer, on } from "@ngrx/store";
import { animalBoard, animals } from "../dashboard/dashboard-datasource";
import * as fromAction from "./shop.action";

export interface State {
  animals: animalBoard[];
}
const initialState: State = {
  animals: [...animals],
};
export const shopReducer = createReducer(
  initialState,
  on(fromAction.SET_ANIMALS, (state, action) => ({
    ...state,
    animals: [...action.animals],
  })),
  on(fromAction.ADD_ANIMAL, (state, action) => ({
    ...state,
    animals: [...state.animals, action.animal],
  }))
);