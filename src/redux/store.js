import { createStore, applyMiddleware } from "redux";
import { fetchUsers } from "../api";
import { rootReducer } from "./reducers";
import thunkMiddleware from "redux-thunk";
import { globalState } from "./globalState";

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
  console.log("update_data", store.getState());
});

store.dispatch(fetchUsers(globalState.id));
