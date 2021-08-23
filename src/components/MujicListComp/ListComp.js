import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListComp = ({title}) => {
  console.log(title, 'title');
  return (
    <View style={styles.square}>
      <Text style={styles.textArea}>{title}</Text>
    </View>
  );
};

export default ListComp;

const styles = StyleSheet.create({
  textArea: {
    color: 'red',
    fontSize: 30,
  },
});
