import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import LoginForm from '../../components/loginComp/LoginForm';
import {userLogin} from '../../redux/actions/authAction';

const LoginPage = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onClickHandler = () => {
    navigation.navigate('signup');
  };

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
