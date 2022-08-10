import {
  CLEAR_AUTH_STATE,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionTypes';
import Instance from '../../../helpers/axiosInterceptor';

export default ({
    email,
    password,
    username,
    firstname: first_name,
    lastname: last_name,
  }) =>
  dispatch =>
  onSuccess => {
    dispatch({type: REGISTER_LOADING});
    Instance.post('auth/register', {
      email,
      password,
      username,
      first_name,
      last_name,
    })
      .then(res => {
        dispatch({type: REGISTER_SUCCESS, payload: res.data});
        onSuccess(res.data);
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'somthing went wrong'},
        });
        console.log('errors for err action', err.response);
      });
  };

export const clearAuthState = () => dispatch => {
  dispatch({type: CLEAR_AUTH_STATE});
};
