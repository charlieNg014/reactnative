import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import RecipeDetails from "./detailscreens/Recipes/RecipeDetails"


// import RecipeDetails from "../Recipes/RecipeDetails"
import BakeRecipe from "./detailscreens/Recipes/BakeRecipe"

const RecipeTabStack = createStackNavigator();

const Recipe = () => {
    return (
        <RecipeTabStack.Navigator>
            <RecipeTabStack.Screen
                name = "RECIPES"
                component = {BakeRecipe}
            />
            <RecipeTabStack.Screen
                name = "RecipeDetails"
                component = {RecipeDetails}
            />
        </RecipeTabStack.Navigator>
    )
}

export default Recipe

const styles = StyleSheet.create({})
