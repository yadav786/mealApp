import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Platform, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import Colors from '../constants/colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import { setFilters } from '../store/actions/meals';

const FilterSwitch = props => {
  return <View style={styles.filterContainer}>
  <Text>{props.label}</Text>
  <Switch trackColor={{ true: Colors.primary }} thumbColor={Colors.primary} value={props.value}  onValueChange={ newValue => props.onChange(newValue)}/>
</View>
}

export default function FiltersScreen(props) {

  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }
   
     dispatch(setFilters(appliedFilters));

  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

  useEffect(() => {
      navigation.setParams({ save: saveFilters })
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch label="Gluten-free" value={isGlutenFree} onChange={ newValue => setIsGlutenFree(newValue)}/>
      <FilterSwitch label="Lactose-free" value={isLactoseFree} onChange={ newValue => setIsLactoseFree(newValue)}/>
      <FilterSwitch label="Vegan" value={isVegan} onChange={ newValue => setIsVegan(newValue)}/>
      <FilterSwitch label="Vegetarian" value={isVegetarian} onChange={ newValue => setIsVegetarian(newValue)}/>
    </View>
  );
}

FiltersScreen.navigationOptions = (navData) => {

  return {
    headerTitle: 'Filter Meals',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName="ios-menu" onPress={() => { navData.navigation.toggleDrawer() }} /></HeaderButtons>,
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Save" iconName="ios-save" onPress={() => { 
      navData.navigation.getParam('save')()
    }} /></HeaderButtons>,
    headerStyle: {
      backgroundColor: Platform.OS === 'ios' ? '' : Colors.primary
    },
    headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white'
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  }
});
