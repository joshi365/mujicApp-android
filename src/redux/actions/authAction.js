import axios from 'axios';
import {APP_BASE_URL, AUTH_URL} from '../config';
import {types} from '../reducers/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from  'jwt-decode'

const {SET_CURRENT_USER} = types;

export const set_current_user = (decoded) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: decoded,
  });
};

export const userLogin = (formdata,navigation) => async dispatch => {
 
  const link = APP_BASE_URL + AUTH_URL;

  try {
    await axios.post(link, formdata).then(res => {
      if (res.status === 200) {
        const token = res.data
        console.log(token)
        AsyncStorage.setItem('auth-key', token);
        dispatch({
          type: SET_CURRENT_USER,
        });
        setAuthToken(token)
  
        const decoded = jwt_decode(token)
        dispatch(set_current_user(decoded));

        navigation.navigate("mujic_list");

      }
    });
  } catch (error) {
    console.log(error);
  }
};
