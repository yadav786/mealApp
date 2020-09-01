import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MealNavigator from './navigation/MealsNavigator';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import mealReducer from './store/reducers/meals';

const rootReducer = combineReducers({
  meals: mealReducer  
});

const store = createStore(rootReducer);

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
    <Provider store={store}>
    <MealNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
