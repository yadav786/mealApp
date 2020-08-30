import React from 'react';
import { StyleSheet, View, Text, Button, FlatList} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data'
import Colors from '../constants/colors';

import MealItem from '../components/MealItem'

export default function CategoryMealScreen(props) {
  const catId = props.navigation.getParam('categoryId');
  const selectedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  const renderMealItem = (itemData) => {
    return(
      <MealItem title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() =>  props.navigation.navigate({ routeName: 'MealDetail', params: { 
        mealId: itemData.item.id
      } }) } />
     )
  }

  return (
    <View style={styles.screen}>
    <FlatList data={selectedMeals} keyExtractor={item => item.id}  renderItem={renderMealItem} style={{width: '100%'}} />
    </View>
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
