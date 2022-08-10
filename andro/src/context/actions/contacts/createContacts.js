import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
} from "../../../constants/actionTypes";
import instance from "../../../helpers/axiosInterceptor";

export default (form) => (dispatch) => {
  const requestPayload = {
    country_code: form.country_code || "",
    first_name: form.firstName || "",
    last_name: form.lastName || "",
    phone_number: form.phoneNumber || "",
    contact_picture: form.contactPicture || null,
    is_favourite: false,
  };
  dispatch({ type: CREATE_CONTACTS_LOADING });

  instance
    .post("/contacts/", requestPayload)
    .then((res) => {
      console.log("response aya ki nhai", res);
      dispatch({ type: CREATE_CONTACTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("error aya ki nhai", err);
      dispatch({
        type: CREATE_CONTACTS_FAIL,
        error: err.respose
          ? err.respose.data
          : { error: "Something went wrong, try again later" },
      });
    });
};
