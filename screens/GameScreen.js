import React, { useState, useRef, useEffect } from 'react';
import { Text, StyleSheet, Alert, ScrollView, View, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ScreenOrientation } from 'expo';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';

import Colors from '../constants/colors';
import defaultStyles from '../constants/default-styles';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const generatedNumber = Math.floor(Math.random() * (max - min) ) + min;
    if(generatedNumber === exclude){
        return generateRandomBetween();
    }
    else{
        generatedNumber;
    }
}

const GameScreen = (props) => {
    
    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    const { userChoice, onGameOver } = props;

    useEffect(()=>{
            
            const updateLayout = () => {
                setAvailableDeviceWidth(Dimensions.get('window').width);
                setAvailableDeviceHeight(Dimensions.get('window').height);
            }

            Dimensions.addEventListener('change', updateLayout);

            return () => {
                Dimensions.removeEventListener('change', updateLayout);
            }
    });

    useEffect(()=>{
         if(currentGuess === userChoice){
             props.onGameOver(pastGuesses.length);
         }
    }, [userChoice, currentGuess, onGameOver]);

    const nextGuessHandler = (direction) => {
        if((direction === 'lower' && currentGuess < props.userChoice) && (direction === 'greater' && currentGuess > props.userChoice)){
            Alert.alert('Don\'t lie', 'You know that\'s wrong', [{text: 'Sorry', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }
        else{
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(curRounds => curRounds + 1);
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses])
    }

    const renderListItem = (listLength, itemData) => (
        <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <BodyText>{itemData.item}</BodyText>
        </View>
    );

    if(availableDeviceHeight < 500){
        return(<View style={styles.screen}>
        <Text style={defaultStyles.bodyText}>Opponent's Guess</Text>
        <View style={styles.control}>
        <MainButton style={Colors.accent} onPress={() => { nextGuessHandler('lower') }} >
            <Ionicons name="md-remove" color="white" size={24} />
        </MainButton>
        <NumberContainer>{currentGuess}</NumberContainer>
        <MainButton style={Colors.primary} onPress={() => { nextGuessHandler('greater') }} >
            <Ionicons name="md-add" color="white" size={24} />
        </MainButton>
        </View>
        <View style={styles.listContainer}>
        <FlatList keyExtractor={item => item} 
            data={pastGuesses} 
            renderItem={renderListItem.bind(this, pastGuesses.length)}
            contentContainerStyle={styles.list}
        />
        </View>
    </View>)
    }

    return(<View style={styles.screen}>
        <Text style={defaultStyles.bodyText}>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
        <MainButton style={Colors.accent} onPress={() => { nextGuessHandler('lower') }} >
            <Ionicons name="md-remove" color="white" size={24} />
        </MainButton>
        <MainButton style={Colors.primary} onPress={() => { nextGuessHandler('greater') }} >
            <Ionicons name="md-add" color="white" size={24} />
        </MainButton>
        </Card>
        <View style={styles.listContainer}>
        {/* ScrollView contentContainerStyle={styles.list}>
            { pastGuesses.map( (guess, numofRound) => {
                <View key={guess} style={styles.listItem}>
                    <BodyText>#{pastGuesses.length - numofRound + 1}</BodyText>
                    <BodyText>{guess}</BodyText>
                </View>
            })
            }
        </ScrollView>
        */ }
        <FlatList keyExtractor={item => item} 
            data={pastGuesses} 
            renderItem={renderListItem.bind(this, pastGuesses.length)}
            contentContainerStyle={styles.list}
        />
        </View>
    </View>)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 300,
        maxWidth: '80%',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
        fontFamily: 'open-sans'
    },
    listContainer: {
        flex: 1,
        width: Dimensions.get('window').width > 350 ? '60%' : '80%'
    },
    control: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%'
    },
    list: {
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    listItem: {
       borderColor: '#ccc',
       padding: 15,
       marginVertical: 10,
       backgroundColor: 'white',
       borderWidth: 1,
       flexDirection: 'row',
       justifyContent: 'space-between',
       width: '100%'
    }
});

export default GameScreen;
