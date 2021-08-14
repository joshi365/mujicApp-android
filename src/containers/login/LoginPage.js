import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import LoginForm from '../../components/loginComp/LoginForm';
import {userLogin} from '../../redux/actions/authAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({navigation}) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    navigation.navigate('signup');
  };

  // const getAuthkey = async () => {
  //   const key = await AsyncStorage.getItem('auth-key');
  //   console.log(key,"new key")
  // };

  const onSubmitHandler = () => dispatch(userLogin());

  return (
    <View style={styles.container}>
      <LoginForm
        onClickHandler={onClickHandler}
        onSubmitHandler={onSubmitHandler}
      />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
