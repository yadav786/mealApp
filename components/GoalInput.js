import React, { useState } from 'react';
import {View, Button, TextInput, StyleSheet, Modal} from 'react-native';

export default function GoalInput(props){
    
    const [addgoal, setAddGoal] = useState('');

    const addNextGoal = (goalText) => {    
      setAddGoal(goalText);
    }

    const onAddGoal = () => {
      props.onAddGoal(addgoal);
      setAddGoal('');
    }

    const cancelNextGoal = () => {
      props.onCancelGoal();
      setAddGoal('');
    }

    return(
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
    <TextInput placeholder="Add Goal" value={addgoal} style={styles.input} onChangeText={addNextGoal} />
    <View style={styles.buttonContainer}>
    <View style={styles.button}>
    <Button title="CANCEL" color="red" onPress={() => cancelNextGoal()}/> 
    </View>
    <View style={styles.button}>
    <Button title="ADD" onPress={() => onAddGoal(addgoal)}/> 
    </View>
    </View>
    </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      width: '80%',
      borderColor: 'black', 
      borderWidth: 1,
      padding: 10
    },
    buttonContainer: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     width: '60%',
     marginTop: 10
    },
     button:{
       width: '40%'
     }
  });
