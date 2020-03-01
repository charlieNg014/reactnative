import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const MainScreenTab = createBottomTabNavigator();
import { Ionicons } from '@expo/vector-icons';

//screens for tab
import Products from '../../screen/ProductsScreen/Products'
import Profile from "../../screen/ProfileScreen/Profile"
import Shops from "../../screen/ShopsScreen/Shops"
import Articles from "../../screen/ArticleScreen/Articles"
import Main from "../../navigation/Main"
import Testing from '../Testing';

export default class MainScreen extends Component {
    render() {
        return (
            <MainScreenTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Products') {
                    iconName = focused
                      ? 'ios-apps'
                      : 'ios-apps';
                  } else if (route.name === 'Article') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                  } else if (route.name === "Shops") {
                      iconName = focused ? 'ios-cart' : 'ios-cart'
                  } else if (route.name === "Profile") {
                      iconName = focused ? 'ios-contact': 'ios-contact'
                  }
      
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'green',
                inactiveTintColor: 'gray',
              }}
              >
                <MainScreenTab.Screen name = "Products" component = {Products}/>
                <MainScreenTab.Screen name = "Article" component = {Articles} />
                <MainScreenTab.Screen name = "Shops" component = {Shops} />
                <MainScreenTab.Screen name = "Profile" component = {Profile}/>
                <MainScreenTab.Screen name = "Testing" component = {Testing} />
            </MainScreenTab.Navigator>
        )
    }
}

const styles = StyleSheet.create({})
