import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import { getMusicList } from '../../redux/actions/userActions';

const MujicList = () => {
  const dispatch = useDispatch();

  const [music, setMusic] = useState();

  useEffect(() => {
      dispatch(getMusicList())
  },[]);

  return (
    <View>
      <Text>BHADWAAAAAAAAAA</Text>
    </View>
  );
};

export default MujicList;
