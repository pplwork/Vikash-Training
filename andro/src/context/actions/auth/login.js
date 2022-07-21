import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../../constants/actionTypes";
import instance from "../../../helpers/axiosInterceptor";

export default ({ username, password }) =>
  (dispatch) => {
    dispatch({ type: LOGIN_LOADING });
    instance
      .post("auth/login", {
        password,
        username,
      })
      .then((res) => {
        console.log("res.data", res.data);
        AsyncStorage.setItem("token",res.data.token)
        AsyncStorage.setItem("user",JSON.stringify(res.data.user))
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log("errorr", err);
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? { error: err.response.data }
            : { error: "something went wrong" },
        });
      });
  };
