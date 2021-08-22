import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListComp = ({title}) => {
  console.log(title, 'title');
  return (
    <View style={styles.container} >
      <View style={styles.square}>
        <Text style={styles.textArea}>{title}</Text>
      </View>
    </View>
  );
};

export default ListComp;

const styles = StyleSheet.create({
  textArea: {
    color: 'red',
    fontSize: 30,
  },
  square: {
    backgroundColor: '#7cb48f',
    width: 100,
    height: 100,
    margin: 4,
  },
  container: {
    backgroundColor: '#7CA1B4',
    flex: 1,
    alignItems: 'center', // ignore this - we'll come back to it
    justifyContent: 'center', // ignore this - we'll come back to it
    flexDirection: 'row',
  }
});
