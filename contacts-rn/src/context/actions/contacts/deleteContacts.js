import {
  DELETE_CONTACTS_FAIL,
  DELETE_CONTACTS_SUCCESS,
  DELETE_CONTACTS_LOADING,
} from '../../../constants/actionTypes';
import Instance from '../../../helpers/axiosInterceptor';

export default id => dispatch => onSuccess => {
  dispatch({type: DELETE_CONTACTS_LOADING});

  Instance.delete(`/contacts/${id}`)
    .then(res => {
      dispatch({type: DELETE_CONTACTS_SUCCESS, payload: id});
      return onSuccess();
    })
    .catch(error => {
      dispatch({
        type: DELETE_CONTACTS_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'someting went wrong, please try agian later'},
      });
      console.log('error', error?.response?.data);
    });
};
