import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListComp = ({data}) => {
  return (
    <View style={styles.container}>
      {console.log({data})}
      <View style={styles.row}>
        <Text style={styles.textArea}>{data.song}</Text>
        <Text style={styles.textArea}>{data.album}</Text>
        <Text style={styles.textArea}>{data.artist}</Text>
        <Text style={styles.textArea}>{data.scale}</Text>
        <Text style={styles.textArea}>{data.chordPattern}</Text>
      </View>
    </View>
  );
};

export default ListComp;

const styles = StyleSheet.create({
  container:{
    borderWidth:2,
    marginBottom:30,
    borderRadius:30,
    padding: 10
  },
  textArea: {
    color: 'red',
    fontSize: 30,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
