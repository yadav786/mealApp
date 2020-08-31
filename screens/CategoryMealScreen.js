import React from 'react';
import { StyleSheet, View, Text, Button, FlatList} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data'
import Colors from '../constants/colors';
import MealList from '../components/MealList'

export default function CategoryMealScreen(props) {
  const catId = props.navigation.getParam('categoryId');
  const selectedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  return (
    <MealList listData={selectedMeals} navigation={props.navigation}/>
  );
}

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});
