import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useSelector} from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import cartDisplay from "./detailscreens/Mycart/cartDisplay"
import product from "./Products"

const MyCartTabStack = createStackNavigator();

const Mycart = () => {
    return (
        <MyCartTabStack.Navigator>
            <MyCartTabStack.Screen
                name = "My Cart"
                component = {cartDisplay}
            />
            {/* <MyCartTabStack.Screen
                name = "shopping"
                component = {product}
            /> */}
        </MyCartTabStack.Navigator>
    )
}

export default Mycart

const styles = StyleSheet.create({})
