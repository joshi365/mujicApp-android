import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMusicList} from '../../redux/actions/userActions';
import isEmpty from '../../utils/isEmpty';

const MujicList = () => {
  const dispatch = useDispatch();

  const [music, setMusic] = useState();

  const getMusicFromStore = useSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(getMusicList());

    if(!isEmpty(getMusicFromStore)){
      setMusic(getMusicFromStore)
    }
  }, []);

  return (
    <View>
      <Text>BHADWAAAAAAAAAA</Text>
      {console.log(music)}
    </View>
  );
};

export default MujicList;
