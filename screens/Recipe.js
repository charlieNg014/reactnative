import React from 'react'
import { StyleSheet,View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {Button, Block, Input, Text} from "../components"
import {theme} from "../constants"
import RecipeDetails from "./detailscreens/Recipes/RecipeDetails"
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';


// import RecipeDetails from "../Recipes/RecipeDetails"
import BakeRecipe from "./detailscreens/Recipes/BakeRecipe"
import CakeRecipe from "./detailscreens/Recipes/CakeRecipe"

const RecipeTabStack = createStackNavigator();

const recipeTab = ({navigation}) => {
    return (
        <Container style = {{marginTop: -60}}>
            <Header hasTabs/>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Bakerecipe">
                <BakeRecipe 
                    navigation = {navigation} 
                />
            </Tab>
            <Tab heading="Cakerecipe">
                <CakeRecipe 
                    navigation = {navigation}
                />
            </Tab>
            </Tabs>
        </Container>
    )
}


const Recipe = () => {
    return (
        <RecipeTabStack.Navigator>
            <RecipeTabStack.Screen
                name = "RECIPES"
                component = {recipeTab}
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
