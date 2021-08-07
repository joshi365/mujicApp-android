import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import LoginForm from '../../components/loginComp/LoginForm';

const LoginPage = () => {
  return (
    <View style={styles.container}>
     <LoginForm/>
    </View>
  );
};

export default LoginPage;


const styles = StyleSheet.create({
    container: {
        flex: 1,
      }
})