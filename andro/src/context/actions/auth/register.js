import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../../constants/actionTypes";
import instance from "../../../helpers/axiosInterceptor";

export default ({
    email,
    password,
    username,
    fullname: first_name,
    lastname: last_name,
  }) =>
  (dispatch) =>
  (onSuccess) => {
    dispatch({ type: REGISTER_LOADING });
    instance
      .post("auth/register", {
        email,
        password,
        username,
        first_name,
        last_name,
      })
      .then((res) => {
        console.log("res.data", res.data);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
        onSuccess(res.data);
      })
      .catch((err) => {
        console.log("errorr", err);
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? { error: err.response.data }
            : { error: "something went wrong" },
        });
      });
  };

export const clearAuthState = (dispatch) => {
  dispatch({ type: CLEAR_AUTH_STATE });
};
