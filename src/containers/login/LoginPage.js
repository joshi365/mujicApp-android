import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import LoginForm from '../../components/loginComp/LoginForm';
import {userLogin} from '../../redux/actions/authAction'

const LoginPage = ({navigation}) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    navigation.navigate('signup');
  };

  const onSubmitHandler = () => dispatch(userLogin());

  return (
    <View style={styles.container}>
      <LoginForm onClickHandler={onClickHandler} onSubmitHandler={onSubmitHandler} />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
