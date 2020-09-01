import React from 'react';
import { StyleSheet, FlatList, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

import Colors from '../constants/colors';

import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
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

CategoriesScreen.navigationOptions = (navData) => {

  return {
    headerTitle: 'Meal Categories',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName="ios-menu" onPress={() => { navData.navigation.toggleDrawer() }} /></HeaderButtons>,
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? '' : Colors.primary
    },
    headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white'
  }
}

const styles = StyleSheet.create({

});
