import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListComp from '../../components/MujicListComp/ListComp';
import {getMusicList} from '../../redux/actions/userActions';
import isEmpty from '../../utils/isEmpty';

const MujicList = () => {
  const dispatch = useDispatch();

  const renderItem = ({item}) => <ListComp title={item.album} />;

  const [music, setMusic] = useState();

  const getMusicFromStore = useSelector(state => state.userReducer.mujicList);


  useEffect(() => {
    dispatch(getMusicList());
    //setMusic(getMusicFromStore);
  }, [setMusic]);

  return (
    <View>
      {console.log('dad')}

      {!isEmpty(music) ? (
        <FlatList
          data={music}
          keyExtractor={item => item._id}
          renderItem={renderItem}
        />
      ) : (
        <Text>Loading .....</Text>
      )}
    </View>
  );
};

export default MujicList;
