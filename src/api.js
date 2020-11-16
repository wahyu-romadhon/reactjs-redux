import axios from "axios";
import { actionType } from "./redux/action";

export const fetchUsers = (id) => {
  return function (dispatch) {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        const users = response;
        dispatch({
          type: actionType.FETCH_USERS_SUCCESS,
          payload: users,
        });
      });
    //   .catch((err) => {});
  };
};
