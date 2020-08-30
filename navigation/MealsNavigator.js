import React from 'react';
import { Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen'; 
import CategoryMealScreen from '../screens/CategoryMealScreen'; 
import MealDetailScreen from '../screens/MealDetailScreen'; 
import FavouritesScreen from '../screens/FavouritesScreen';
import Colors from '../constants/colors';

import { Ionicons } from '@expo/vector-icons';

const  MealsNavigator = createStackNavigator({
      Categories: { 
          screen : CategoriesScreen ,
          navigationOptions: {
              headerTitle: 'Meal Categories'
          }
      },
      CategoryMeals: {
          screen: CategoryMealScreen,
      },
      MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'ios' ? '' : Colors.primary
        },
        headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white'
      }
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: { 
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
               return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            }   
        }
    },
    Favourites: {
        screen: FavouritesScreen,
        navigationOptions: {
            tabBarLabel: 'Favourites!',
            tabBarIcon: (tabInfo) => {
               return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            }   
        }
    }
}, {
    activeTintColor: Colors.accent
});

export default createAppContainer(MealsFavTabNavigator);

