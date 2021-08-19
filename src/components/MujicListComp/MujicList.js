import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MujicList = ({title}) => {
    console.log(title,"title")
  return (
    <View>
      <Text style={styles.textArea}>{title}</Text>
    </View>
  );
};

export default MujicList;


const styles =StyleSheet.create({
    textArea:{
        color: "red",
        fontSize:30
    }
})