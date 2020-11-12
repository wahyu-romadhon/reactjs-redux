import { globalState } from "../store/store";

export const rootReducer = (state = globalState, action) => {
  let nilaiDefault = 0;
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        nilai: state.nilai + 1,
      };
    case "MINUS_DATA":
      return {
        ...state,
        nilai: state.nilai > 0 ? state.nilai - 1 : nilaiDefault,
      };
    default:
      return state;
  }
};
