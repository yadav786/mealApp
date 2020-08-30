import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MealNavigator from './navigation/MealsNavigator';

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
