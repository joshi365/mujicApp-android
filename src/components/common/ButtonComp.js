import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonComp = ({name}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    backgroundColor: '#23d954',
    padding: 15,
    alignItems: 'center',
    width: '40%',
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'medium',
    fontSize:17
  },
});
