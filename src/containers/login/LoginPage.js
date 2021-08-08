import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import LoginForm from '../../components/loginComp/LoginForm';

const LoginPage = ({navigation}) => {

  const onClickHandler = () => {
    navigation.navigate("signup")
  }

  return (
    <View style={styles.container}>
     <LoginForm onClickHandler={onClickHandler}/>
    </View>
  );
};

export default LoginPage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
      }
})