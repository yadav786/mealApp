import React, {useState } from 'react';
import { StyleSheet, View, Text, Button, Image, Dimensions, ScrollView } from 'react-native';

import Colors from  './constants/colors';
import BodyText from '../components/BodyText';

export default function GameOverScreen(props) {
  

  return (
    <ScrollView>
    <View style={styles.screen}>
        <Text>Game Over!</Text>
        <View style={styles.imageContainer}>
        <Image 
         // source={require('../assets/succcess.png')} 
         source={{uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_1280.jpg'}}
         style={styles.image}
         resizeMode="cover" />
        </View>
        <BodyText style={styles.resultText}>
        <Text>The number of Rounds: <Text style={styles.highlight}>{props.roundsNumber}</Text></Text>
        <Text>The user number was: <Text style={styles.highlight}>{props.userNumber}</Text></Text>
        </BodyText>
        <Button title="NEW GAME" onPress={props.onRestart}/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    widtth: 300,
    height: 300,
    marginVertical: Dimensions.get('window').height / 60,
    overflow: 'hidden',
    borderRadius: 150,
    borderWidth: 3
  },
  image: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width / 2
  },
  resultText: {
    marginVertical: 15,
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 350 ? 16 : 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});
