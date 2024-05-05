import { createReducer, on } from "@ngrx/store";
import { animalBoard, animals } from "./animals-list-datasource";
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
  })),
  on(fromAction.REMOVE_ANIMAL, (state, action) => ({
    ...state,
    animals: state.animals.filter((animal, index) => index !== action.index),
  })),
  on(fromAction.UPDATE_ANIMAL, (state, action) => {
    const updatedList: animalBoard[] = [...state.animals];
    const updatedAnimal: animalBoard = {
      ...state.animals[action.index],
      ...action.animal,
    };
    updatedList[action.index] = updatedAnimal;
    console.log(action);

    return {
      ...state,
      animals: updatedList,
    };
  })
);
