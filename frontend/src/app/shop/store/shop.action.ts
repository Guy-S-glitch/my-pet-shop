import { createAction, props } from "@ngrx/store";
import { animalBoard } from "./animals-list-datasource";

export const SET_ANIMALS = createAction(
  "[shop] Set animals",
  props<{ animals: animalBoard[] }>()
);
export const ADD_ANIMAL = createAction(
  "[shop] Add animal",
  props<{ animal: animalBoard }>()
);
export const REMOVE_ANIMAL = createAction(
  "[shop] Remove animal",
  props<{ index: number }>()
);
export const UPDATE_ANIMAL = createAction(
  "[shop] Update animal",
  props<{ index: number; animal: animalBoard }>()
);
