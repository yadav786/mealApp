import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MealNavigator from './navigation/MealsNavigator';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {

  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){ 
    return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={()=> console.log('error fonts') }/>
  }
  
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  return (
    <MealNavigator />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
