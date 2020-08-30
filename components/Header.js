import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import Colors from '../constants/colors';

const Header = (props) => {
   
    return(
    <View style={[...styles.header, ...Platform.select({ ios: styles.headerIOS, android: styles.headerAndroid })]}>
    <Text style={styles.headerTitle}>{props.title}</Text>
    </View>)
}

const styles = StyleSheet.create({
    header: {
      paddingTop: 36,
      width: '100%',
      alignItems: 'center',
      height: 90,
    },
    headerIOS: {
      backgroundColor: 'white',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    headerAndroid: {
      backgroundColor: Colors.primary ,
      borderBottomColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerTitle: {
      fontSize: 18,
      color:  Platform.OS === 'ios' ? Colors.primary : 'white',
    }
  });

export default Header;