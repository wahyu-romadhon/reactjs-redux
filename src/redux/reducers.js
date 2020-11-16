import { actionType } from "./action";
import { globalState } from "./globalState";
// import {combineReducers} 'redux';

export const rootReducer = (state = globalState, action) => {
  let nilaiDefault = 0;
  switch (action.type) {
    case actionType.ADD_DATA:
      return {
        ...state,
        nilai: state.nilai + 1,
      };
    case actionType.MINUS_DATA:
      return {
        ...state,
        nilai: state.nilai > 0 ? state.nilai - 1 : nilaiDefault,
      };
    case actionType.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: "",
      };
    case actionType.ONCHANGE_ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};
