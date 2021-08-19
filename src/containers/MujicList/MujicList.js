import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMusicList} from '../../redux/actions/userActions';
import isEmpty from '../../utils/isEmpty';

const MujicList = () => {
  const dispatch = useDispatch();

  //const renderItem = ({item}) => <MujicList title={item.album} />;

  const [music, setMusic] = useState();

  const getMusicFromStore = useSelector(state => state.userReducer.mujicList);

  useEffect(() => {
    dispatch(getMusicList());
    setMusic(getMusicFromStore);
  }, []);

  return (
    <View>
      {console.log('dad')}

      {!isEmpty(music) ? (
        <FlatList
          data={music}
          keyExtractor={item => item._id}
          renderItem={({item}) => <Text>{item.album}</Text>}
        />
      ) : (
        <Text>Loading .....</Text>
      )}
    </View>
  );
};

export default MujicList;
