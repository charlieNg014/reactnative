import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import Login from '../screens/Login';
import Signup from '../screens/detailscreens/Login/Signup';
import ForgotPassword from '../screens/detailscreens/Login/ForgotPassword';
// import Signup from "../screens/detailscreens/Login/Signup"

const Stack = createStackNavigator();

const LoginNavigation = () => {
    return (
        <Stack.Navigator 
        screenOptions = {{
            headerShown: false
        }}>
            <Stack.Screen 
                name = "Login"
                component = {Login}
            />
            <Stack.Screen
                name = "MainScreen"
                component = {MainScreen}
            />
            <Stack.Screen
                name = "Signup"
                component = {Signup}
            />
            <Stack.Screen
                name = "ForgotPassword"
                component = {ForgotPassword}
            />
        </Stack.Navigator>
    )
}

export default LoginNavigation;