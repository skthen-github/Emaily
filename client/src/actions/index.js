import axios from "axios";
import { FETCH_USER } from "./types";

// once reduxThunk sees a function (instead of an action) is returned it
// will automatically provide the dispatch object for the function to utilize
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};
