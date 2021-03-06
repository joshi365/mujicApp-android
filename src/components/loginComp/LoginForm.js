import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import back_img from '../../assets/images/back_img.jpg';
import {reusableCss} from '../../utils/reusableCss';
import ButtonComp from '../common/ButtonComp';
import InputComp from '../common/InputComp';

const LoginForm = ({
  onClickHandler,
  onSubmitHandler,
  setNumber,
  setPassword,
  isLoading
}) => {
  

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <ImageBackground
            source={back_img}
            resizeMode="cover"
            style={styles.image}>
            <View style={styles.form}>
              <View style={styles.margin}>
                <Text style={reusableCss.BT}>My Mujic App</Text>
              </View>
              <View style={styles.margin}>
                <Text style={reusableCss.RT}>Login</Text>
              </View>
              <View style={styles.margin}>
                <InputComp
                  placeholder="Mobile number"
                  onChangeText={text => setNumber(text)}
                />
              </View>
              <View style={styles.margin}>
                <InputComp
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={text => setPassword(text)}
                />
              </View>

             
                {isLoading ? (
                  <ActivityIndicator color={'#23d954'} />
                ) : (
                  <ButtonComp name="Login" func={onSubmitHandler} />
                )}
             

              <Text style={styles.sinupText}>New user</Text>
              <TouchableOpacity onPress={() => onClickHandler()}>
                <Text style={styles.sinupClickText}>Sign-up here</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    padding: 20,
  },
  margin: {
    marginBottom: 25,
  },
  sinupText: {
    fontFamily: 'regular',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },
  sinupClickText: {
    fontFamily: 'regular',
    color: '#ff0800',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
  },
});
