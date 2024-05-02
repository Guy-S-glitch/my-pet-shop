import { createAction, props } from "@ngrx/store";
import { animalBoard } from "../dashboard/dashboard-datasource";

export const SET_ANIMALS = createAction(
  "[shop] Set animals",
  props<{ animals: animalBoard[] }>()
);
export const ADD_ANIMAL = createAction(
  "[shop] Add animal",
  props<{ animal: animalBoard }>()
);
