import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes';
import Instance from '../../../helpers/axiosInterceptor';

export default form => dispatch => onSuccess => {

  const reqpayload = {
    country_code: form.country_code || '',
    first_name: form.firstName,
    last_name: form.lastName || '',
    phone_number: form.phoneNumber,
    contact_picture: form.contactPicture,
    is_favorite: form.isFavorite || false,
  };
  dispatch({type: CREATE_CONTACTS_LOADING});

  Instance.post('/contacts/', reqpayload)
    .then(res => {
      dispatch({type: CREATE_CONTACTS_SUCCESS, payload: res.data});
      return onSuccess();
    })
    .catch(error => {
      dispatch({
        type: CREATE_CONTACTS_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'someting went wrong, please try agian later'},
      });
      console.log('error', error?.response?.data);
    });
};
