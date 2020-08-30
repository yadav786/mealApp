import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

import Colors from '../constants/colors';

import CategoryGridTile from '../components/CategoryGridTile';
export default function CategoriesScreen(props) {
  
  const renderGridItem = (itemData) => {
  return  <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={() =>  props.navigation.navigate({ routeName: 'CategoryMeals', params: { 
    categoryId: itemData.item.id
  } }) }/>
  }

  return (
    <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES}  renderItem={renderGridItem} numColumns={2} />
  );
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? '' : Colors.primary
    },
    headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white'
}

const styles = StyleSheet.create({

});
