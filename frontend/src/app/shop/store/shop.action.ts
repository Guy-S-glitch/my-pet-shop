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
