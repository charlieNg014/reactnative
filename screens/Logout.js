import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LogoutDetails from "./detailscreens/Logout/LogoutDetails"
import Testing from "./Testing"


const LogoutTabStack = createStackNavigator();

const Logout = () => {
    return (
        <LogoutTabStack.Navigator>
            <LogoutTabStack.Screen
                name = "Menu"
                component = {LogoutDetails}
            />
            <LogoutTabStack.Screen
                name = "Testing"
                component = {Testing}
            />
        </LogoutTabStack.Navigator>
    )
}

export default Logout

const styles = StyleSheet.create({})
