import isEmpty from '../../utils/isEmpty';
import {GET_ALL_MUSIC_LIST} from '../types';

const initialState = {
  mujicList: null
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MUSIC_LIST:
      return {
        ...state,
        mujicList: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
