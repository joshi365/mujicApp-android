import axios from 'axios';
import {APP_BASE_URL, AUTH_URL} from '../config';
import {types} from '../reducers/types';

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

  const authData = await axios.post(link,data)

  console.log(authData.data)
  
  dispatch({
    type: SET_CURRENT_USER,
  });
};
