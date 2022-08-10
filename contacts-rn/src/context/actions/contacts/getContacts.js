import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_LOADING,
} from '../../../constants/actionTypes';
import Instance from '../../../helpers/axiosInterceptor';

export default () => dispatch => {
  dispatch({type: GET_CONTACTS_LOADING});
  try {
    Instance.get('/contacts').then(res => {
      dispatch({type: GET_CONTACTS_SUCCESS, payload: res.data});
    });
  } catch (error) {
    dispatch({
      type: GET_CONTACTS_FAIL,
      payload: error.response
        ? err.response.data
        : {error: 'someting went wrong, please try agian later'},
    });
    console.log('error', error);
  }
};
