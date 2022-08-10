import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
  EDIT_CONTACTS_FAIL,
  EDIT_CONTACTS_LOADING,
  EDIT_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes';
import Instance from '../../../helpers/axiosInterceptor';

export default (form, id) => dispatch => onSuccess => {

  const reqpayload = {
    country_code: form.country_code || '',
    first_name: form.firstName,
    last_name: form.lastName || '',
    phone_number: form.phoneNumber,
    contact_picture: form.contactPicture,
    is_favorite: form.isFavorite || false,
  };
  dispatch({type: EDIT_CONTACTS_LOADING});

  Instance.put(`/contacts/${id}`, reqpayload)
    .then(res => {
      dispatch({type: EDIT_CONTACTS_SUCCESS, payload: res.data});
      console.log('res.data', res.data);
      return onSuccess(res.data);
    })
    .catch(error => {
      dispatch({
        type: EDIT_CONTACTS_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'someting went wrong, please try agian later'},
      });
      console.log('error', error?.response?.data);
    });
};
