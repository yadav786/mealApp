import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';

import Colors from '../constants/colors';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import Input from  '../components/Input';
import BodyText from '../components/BodyText';

import MainButton from '../components/MainButton';

const StartGameScreen = (props) => {

const [enteredValue, setEnteredValue] = useState('');
const [confirmed, setConfirmed] = useState(false);
const [selectedNumber, setSelectedNumber] = useState('');
const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    }
  
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    }
});

const enteredValueHandler = (enteredNumber) => {
  setEnteredValue(enteredNumber.replace(/[^0-9]/g, ''));
}

const resetInputHandler = () => {
  setEnteredValue('');
  setConfirmed(false);
}

const confirmInputHandler = () => {
  setConfirmed(true);
  const chosenNumber = parseInt(enteredValue);
  if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
    Alert.alert('Invalid Number!', 'Number has to be between 1 to 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
    return;
  }
  setSelectedNumber(chosenNumber);
  setEnteredValue('');
  Keyboard.dismiss();
}

let confirmedOutput;

if(selectedNumber){
  confirmedOutput = <Card style={styles.summaryContainer}>
    <BodyText>Selected Number</BodyText>
    <NumberContainer>{selectedNumber}</NumberContainer>
    <MainButton onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
    </Card>
}

return(
<ScrollView>
<KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
<View style={styles.startGameScreen}>
<Text>Start a New Game!</Text>  
<Card style={styles.inputContainer}>
  <Text>Select a Number</Text>
  <Input style={styles.input} onChangeText={enteredValueHandler}  value={enteredValue} autoCorrect={false} blurOnSubmit autoCapitalize="none" maxLength={2} keyboardType="numeric" />
  <View style={styles.buttonContainer}>
    <View style={{width: buttonWidth }}><Button title="RESET"  color={Colors.accent} onPress={resetInputHandler} /></View>
    <View style={{width: buttonWidth }}><Button title="CONFIRM" color={Colors.primary}  onPress={confirmInputHandler}/></View>
  </View>
</Card>
{confirmedOutput}
</View>
</TouchableWithoutFeedback>
</KeyboardAvoidingView>
</ScrollView>
)    
}

const styles = StyleSheet.create({
  startGameScreen: {
   flex: 1,
   padding: 10,
   alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
    minWidth: 300,
    maxWidth: '95%',
    alignItems: 'center',
    padding: 10
  },
  input: {
      width: 50,
      textAlign: 'center'
  },
  buttonContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    // width: 90
    width: buttonWith 
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});

export default StartGameScreen;
