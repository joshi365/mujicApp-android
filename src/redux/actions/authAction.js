import axios from 'axios';
import {APP_BASE_URL, AUTH_URL} from '../config';
import {types} from '../reducers/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {SET_CURRENT_USER} = types;

export const set_current_user = () => async dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
  });
};

export const userLogin = () => async dispatch => {
  const data = {
    number: '8859540293',
    password: '123456'
  };

  const link = APP_BASE_URL+AUTH_URL 

  const getAuthData = await axios.post(link,data)

  await AsyncStorage.setItem("auth-key",getAuthData.data)

  console.log(getAuthData.data)
  
  dispatch({
    type: SET_CURRENT_USER,
  });
};
