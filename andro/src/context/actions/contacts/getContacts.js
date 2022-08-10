import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from "../../../constants/actionTypes";
import instance from "../../../helpers/axiosInterceptor";

export default () => (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOADING });

  instance
    .get("/contacts")
    .then((res) => {
      dispatch({ type: GET_CONTACTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_CONTACTS_FAIL,
        error: err.respose
          ? err.respose.data
          : { error: "Something went wrong, try again later" },
      });
    });
};
