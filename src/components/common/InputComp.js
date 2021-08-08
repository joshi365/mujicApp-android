import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const InputComp = ({placeholder, ...props}) => {
  return (
    <View>
      <TextInput
        style={styles.inputArea}
        placeholderTextColor="#000000"
        placeholder={placeholder}
        {...props}
      />
    </View>
  );
};

export default InputComp;

const styles = StyleSheet.create({
  inputArea: {
    backgroundColor: '#fff',
    borderRadius: 30,
    fontFamily: 'regular',
    color: 'black',
    textAlign: 'center',
  },
});
