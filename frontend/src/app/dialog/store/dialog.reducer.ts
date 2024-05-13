import { createReducer, on } from "@ngrx/store";
import { SET_DIALOG } from "./dialog.action";

export interface State {
  title: string;
  subtitle: string;
  label: string;
}
const initialState: State = {
  title: "",
  subtitle: "",
  label: "",
};
export const dialogReducer = createReducer(
  initialState,
  on(SET_DIALOG, (state, action) => ({
    ...state,
    title: action.title,
    subtitle: action.subtitle,
    label: action.label,
  }))
);
