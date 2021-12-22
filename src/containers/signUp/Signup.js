import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SignUpForm from '../../components/signUpComp/SignUpForm';

const Signup = ({navigation}) => {
    
  const onClickHandler = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <SignUpForm onClickHandler={onClickHandler} />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
