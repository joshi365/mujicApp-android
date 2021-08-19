import axios from 'axios';
import {APP_BASE_URL, MUJIC_LIST} from '../config';
import {GET_ALL_MUSIC_LIST} from '../types'

export const getMusicList = () => async dispatch => {
  const link = APP_BASE_URL + MUJIC_LIST;
  try {
    await axios.get(link).then(res => {
      dispatch({
        type:GET_ALL_MUSIC_LIST,
        payload:res.data
    })
    });

  } catch (error) {
    console.log(error);
  }
};
