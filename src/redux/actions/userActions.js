import axios from 'axios';
import {APP_BASE_URL, MUJIC_LIST} from '../config';
import types from '../reducers/types'

const {GET_ALL_MUSIC_LIST} = types;

export const getMusicList = () => async dispatch => {
  const link = APP_BASE_URL + MUJIC_LIST;
  try {
    await axios.get(link).then(res => {
      console.log(res);
    });

    dispatch({
        type:GET_ALL_MUSIC_LIST,
        payload:"rer"
    })

  } catch (error) {
    console.log(error);
  }
};
