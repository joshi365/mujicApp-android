import axios from 'axios';
import {APP_BASE_URL, AUTH_URL} from '../config';
import {SET_CURRENT_USER} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import {ToastAndroid} from 'react-native';

export const set_current_user = decoded => async dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: decoded,
  });
};

export const userLogin =
  (formdata, navigation, showLoader, removeLoader) => async dispatch => {
    const link = APP_BASE_URL + AUTH_URL;
    showLoader();
    try {
      await axios.post(link, formdata).then(res => {
        if (res.status === 200) {
          removeLoader();
          const token = res.data;
          // console.log(token);
          AsyncStorage.setItem('auth-key', token);
          dispatch({
            type: SET_CURRENT_USER,
          });
          setAuthToken(token);

          const decoded = jwt_decode(token);
          dispatch(set_current_user(decoded));
          //setLoading(false);

          navigation.navigate('mujic_list');
        }
      });
    } catch (err) {
      removeLoader();
      if (err.response.data !== '') {
        //setLoading(false);
        ToastAndroid.showWithGravityAndOffset(
          err.response.data,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
          0,
          5,
        );
      }
    }
  };
