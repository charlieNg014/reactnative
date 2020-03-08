import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home"
import recipes from "../screens/Recipe"
import products from "../screens/Products"
import favourites from "../screens/Favourites"
import mycart from "../screens/Mycart"
import Testing from "../screens/Testing"
import { Ionicons } from '@expo/vector-icons';

const Stack = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <Stack.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'HOME') {
                iconName = focused
                  ? 'ios-home'
                  : "ios-home"
              } else if (route.name === 'RECIPES') {
                iconName = focused ? 'ios-contact' : 'ios-contact';
              } else if (route.name === "PRODUCTS") {
                  iconName = focused ? 'ios-contact' : 'ios-contact'
              } else if (route.name === "FAVOURITES") {
                  iconName = focused ? 'ios-heart': 'ios-heart'
              } else if (route.name === "MYCART") {
                  iconName = focused ? "ios-cart" : "ios-cart"
              } else if (route.name === "Test") {
                  iconName = focused ? "ios-contact" : "ios-contact"
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
            <Stack.Screen
                name = "HOME"
                component = {Home}
            />
            <Stack.Screen
                name = "RECIPES"
                component = {recipes}
            />
            <Stack.Screen
                name = "PRODUCTS"
                component = {products}
            />
            {/* <Stack.Screen
                name = "FAVOURITES"
                component = {favourites}
            />   */}
            <Stack.Screen
                name = "MYCART"
                component = {mycart}
            />
            <Stack.Screen 
                name = "Test"
                component = {Testing}
            />
        </Stack.Navigator>
    )
}

export default MainScreen

const styles = StyleSheet.create({})
