import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LogoutDetails from "./detailscreens/Logout/LogoutDetails"


const LogoutTabStack = createStackNavigator();

const Logout = () => {
    return (
        <LogoutTabStack.Navigator>
            <LogoutTabStack.Screen
                name = "Menu"
                component = {LogoutDetails}
            />
            {/* <MyCartTabStack.Screen
                name = "shopping"
                component = {product}
            /> */}
        </LogoutTabStack.Navigator>
    )
}

export default Logout

const styles = StyleSheet.create({})
