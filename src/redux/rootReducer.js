import { toInlineStyles } from "../core/utils";
import {
  CHANGE_TEXT,
  TABLE_RESIZE,
  APPLE_STYLE,
  CHANGE_STYLES,
  CHANGE_TITLE,
  UPDATE_DATE,
} from "./types";

// Pure Function
export function rootReducer(state, action) {
  let prevState;
  let field;

  switch (action.type) {
    case TABLE_RESIZE:
      field = action.data.type === "col" ? "colState" : "rowState";
      return { ...state, [field]: value(state, field, action) };

    case CHANGE_TEXT:
      field = "dataState";
      return {
        ...state,
        currentText: action.data.value,
        [field]: value(state, field, action),
      };
    case CHANGE_STYLES:
      return { ...state, currentStyles: action.data };
    case APPLE_STYLE:
      field = "stylesState";
      const val = state[field] || {};
      action.data.ids.forEach((id) => {
        val[id] = { ...val[id], ...action.data.value };
      });
      return {
        ...state,
        [field]: val,
        currentStyles: { ...state.currentStyles, ...action.data.value },
      };
    case CHANGE_TITLE:
      field = "title";
      return { ...state, [field]: action.data };
    case UPDATE_DATE:
      field = "date";
      return { ...state, [field]: Date.now() };

    default:
      return state;
  }
}

function value(state, field, action) {
  const val = state[field] || {};
  val[action.data.id] = action.data.value;
  return val;
}
