import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavouritesScreens = props => {
  return (
    <View style={styles.screen}> 
        <Text>This is the category screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavouritesScreens;