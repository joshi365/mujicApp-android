import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import LoginForm from '../../components/loginComp/LoginForm';
import {userLogin} from '../../redux/actions/authAction';

const LoginPage = ({navigation}) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    navigation.navigate('signup');
  };

  const onSubmitHandler = () => dispatch(userLogin());

  // const onSubmitHandler = () => {
  //   let card_data = {
  //     number:"8859540293",
  //     password:"123456"
  // };
  //   const options = {
  //     method: 'post',
  //     headers: {
  //       Accept: 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(card_data),
  //   };

  //   fetch('http://192.168.29.200:5000/api/user/login', options)
  //     .then(response => {
  //       console.log(response.headers,"dadawdw");
  //       if (response) {
  //         return response.json();
  //       } else {
  //         throw new Error('Something went wrong ...');
  //       }
  //     })
  //     .then(data => console.log(data,"then data"))
  //     .catch(error => console.log(error,"error"));
  // };

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
