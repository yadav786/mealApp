import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function FiltersScreen() {
  return (
    <View style={styles.screen}><Text>The FiltersScreen!</Text></View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
