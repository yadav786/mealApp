import React from 'react';
import { Platform } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen'; 
import CategoryMealScreen from '../screens/CategoryMealScreen'; 
import MealDetailScreen from '../screens/MealDetailScreen'; 
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/colors';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

const defaultStackOptions =  {
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? '' : Colors.primary
    },
    headerTitleStyle: {
       fontFamily: 'open-sans'
    },
    headerBackTitleStyle: {
       fontFamily: 'open-sans-bold'
    },
    headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white'
  }

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
    defaultNavigationOptions: defaultStackOptions
});

const FavNavigator = createStackNavigator({
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen 
}, {
    defaultNavigationOptions: defaultStackOptions
});

const tabScreenConfig =  {
    Meals: { 
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primary
        }
    },
    Favourites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favourites!',
            tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accent
        }
    }
};

const MealsFavTabNavigator =  Platform.OS === 'ios' ? createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans-bold'
            },
            activeTintColor: Colors.accent
        }
}) : createMaterialBottomTabNavigator(tabScreenConfig,  {
    activeColor: 'white',
    shifting: false,
    barStyle: {
        backgroundColor: Colors.primary
    }
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    /*
    navigationOptions: {
        drawerLabel: 'Filter!!!'
    },
    */
    defaultNavigationOptions: defaultStackOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
       screen: MealsFavTabNavigator,
       navigationOptions: {
           drawerLabel: 'Meals'
       }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accent,
        labelStyle: {
            fontFamily: 'open-sans'
        }
    }
});

export default createAppContainer(MainNavigator);

