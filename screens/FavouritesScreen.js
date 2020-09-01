
import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, Platform } from 'react-native';
import MealList from '../components/MealList';
import Colors from '../constants/colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
export default function FavouritesScreen(props) {

  const favMeals = useSelector(state => state.meals.favouriteMeals);

  if(favMeals.length == 0 || !favMeals){
    return <View style={styles.content}><Text>No Favourite Meals Found. Start Adding!</Text></View>
  }

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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
