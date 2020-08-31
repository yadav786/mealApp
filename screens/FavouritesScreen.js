
import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data'
import MealList from '../components/MealList';
import Colors from '../constants/colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
export default function FavouritesScreen(props) {

  const favMeals = MEALS.filter( meal => meal.id === 'm1' || meal.id === 'm2');

  return (
    <MealList listData={favMeals}  navigation={props.navigation} />
  );
}

FavouritesScreen.navigationOptions = (navData) => {

  return {
    headerTitle: 'Your Favourites',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName="ios-menu" onPress={() => { navData.navigation.toggleDrawer() }} /></HeaderButtons>,
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? '' : Colors.primary
    },
    headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white'
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
