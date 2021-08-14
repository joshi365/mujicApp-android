import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import LoginForm from '../../components/loginComp/LoginForm';
import {userLogin} from '../../redux/actions/authAction';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onClickHandler = () => {
    navigation.navigate('signup');
  };

  const checkAuth = useSelector(state => state.authReducer);

  console.log(checkAuth)

  // const getAuthkey = async () => {
  //   const key = await AsyncStorage.getItem('auth-key');
  //   console.log(key,"new key")
  // };

  const onSubmitHandler = () => {
    const formdata = {
      number: number,
      password: password,
    };

    dispatch(userLogin(formdata, navigation));
  };

  return (
    <View style={styles.container}>
      <LoginForm
        onClickHandler={onClickHandler}
        onSubmitHandler={onSubmitHandler}
        setNumber={setNumber}
        setPassword={setPassword}
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
