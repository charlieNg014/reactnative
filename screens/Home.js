import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {Button, Block, Input, Text} from "../components"
import {theme} from "../constants"
import HomeDetails from "./detailscreens/HomeDetails"
import ProductDetails from "./detailscreens/Products/ProductDetails"
import RecipeDetails from "./detailscreens/Recipes/RecipeDetails"
const Stack = createStackNavigator();

const Home = () => {
    return (
        <Stack.Navigator>
                <Stack.Screen
                style = {styles.navbar}
                name="Home"
                component={HomeDetails}
                />
                <Stack.Screen
                    name = "ProductDetails"
                    component = {ProductDetails}
                />
                <Stack.Screen
                    name = "RecipeDetails"
                    component = {RecipeDetails}
                />
        </Stack.Navigator>
    )
}

export default Home

const styles = StyleSheet.create({
})
