import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import Instance from '../../../helpers/axiosInterceptor';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default ({password, username}) =>
  dispatch => {
    dispatch({type: LOGIN_LOADING});
    Instance.post('auth/login', {
      password,
      username,
    })
      .then(res => {
        dispatch({type: LOGIN_SUCCESS, payload: res.data});
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.user));
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'somthing went wrong'},
        });
        console.log('errors for err action', err.response.data);
      });
  };
