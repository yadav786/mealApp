import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';


export default function CategoryGridTile(props) {
 let TouchableComp =  TouchableOpacity;
 if(Platform.OS === 'android'){
    TouchableComp = TouchableNativeFeedback;
 }
    
  return (
    <TouchableComp style={styles.gridItem} onPress={props.onSelect}>
        <View style={[styles.container, {backgroundColor: props.color }]}>
            <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
        </View></TouchableComp>
  );    
}

const styles = StyleSheet.create({
    gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === 'android' ?  'hidden' : 'visible',
    elevation: 3
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    padding: 15
},
title: {
    fontSize: 18,
    textAlign: 'right',
    fontFamily: 'open-sans-bold',
    fontWeight: 'bold'
}
});

