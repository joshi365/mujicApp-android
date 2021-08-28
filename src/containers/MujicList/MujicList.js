import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListComp from '../../components/MujicListComp/ListComp';
import {getMusicList} from '../../redux/actions/userActions';
import isEmpty from '../../utils/isEmpty';

const MujicList = () => {
  const dispatch = useDispatch();

  const renderItem = ({item}) => <ListComp data={item} />;

  const [music, setMusic] = useState();

  const getMusicFromStore = useSelector(state => state.userReducer.mujicList);

  useEffect(() => {
    dispatch(getMusicList());
  }, [setMusic]);

  return (
    <View>
      {!isEmpty(getMusicFromStore) ? (
        <FlatList
          data={getMusicFromStore}
          keyExtractor={item => item._id}
          renderItem={renderItem}
          refreshing={true}
        />
      ) : (
        <Text>Loading .....</Text>
      )}
    </View>
  );
};

export default MujicList;

const styles = StyleSheet.create({});
