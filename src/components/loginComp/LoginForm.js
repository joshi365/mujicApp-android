import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import back_img from '../../assets/images/back_img.jpg';
import ButtonComp from '../common/ButtonComp';
import InputComp from '../common/InputComp';

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={back_img}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.form}>
          <Text style={styles.text}>My Mujic App</Text>
          <Text style={styles.text1}>Login</Text>
          <InputComp placeholder="Mobile number" />
          <InputComp placeholder="Password" secureTextEntry={true} />
          <ButtonComp name="Login" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'bold',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 10,
  },
  text1: {
    color: '#f5f507',
    fontFamily: 'light',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 20,
  },
});
