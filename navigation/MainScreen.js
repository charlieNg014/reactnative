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
import Icon from "react-native-vector-icons/MaterialIcons"


const Stack = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <Stack.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'HOME') {
                iconName = focused
                  ? 'home'
                  : "home"
              } else if (route.name === 'RECIPES') {
                iconName = focused ? 'book' : 'book';
              } else if (route.name === "PRODUCTS") {
                  iconName = focused ? 'cake' : 'cake'
              } else if (route.name === "MYCART") {
                  iconName = focused ? "home" : 'home'
              } else if (route.name === "Test") {
                  iconName = focused ? "home" : "home"
              }
  
              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
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
