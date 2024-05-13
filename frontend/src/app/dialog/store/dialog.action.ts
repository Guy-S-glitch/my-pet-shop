import { createAction, props } from "@ngrx/store";

export const SET_DIALOG = createAction(
  "[dialog] Set dialog",
  props<{ title: string; subtitle: string; label: string }>()
);
