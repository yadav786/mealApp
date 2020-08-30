import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from '../data/dummy-data'
import Colors from '../constants/colors';

import HeaderButton from '../components/HeaderButton';
export default function MealDetailScreen(props) {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId); 

  return (
    <View style={styles.screen}><Text>The MealDetailScreen!</Text>
      <Button title="Go Back To Top" onPress={() => { props.navigation.popToTop() }} />
    </View>
  );
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId); 

  return {
    headerTitle: selectedMeal.title,
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="Favourite" iconName="ios-star" onPress={() => {  }} />
    </HeaderButtons>
  };

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
