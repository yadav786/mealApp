import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = (props) => {
  
  console.log(props);

    return(
    <TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}>
    <View style={styles.item}>
    <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'gray'
    }
  });