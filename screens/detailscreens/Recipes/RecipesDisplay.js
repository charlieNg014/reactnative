import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeDetails from "../Recipes/RecipeDetails"
import BakeRecipe from "./BakeRecipe"
import CakeRecipe from "./CakeRecipe"

const RecipeTabStack = createStackNavigator();

    const recipeTab = ({navigation}) => {
    return (
        <Container style = {{marginTop: -60}}>
            <Header hasTabs/>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Bakerecipe">
                <BakeRecipe 
                navigation = {navigation} />
            </Tab>
            <Tab heading="Cakerecipe">
                <CakeRecipe />
            </Tab>
            </Tabs>
        </Container>
    )
}

const RecipesDisplay = () => {
    return (
        <RecipeTabStack.Navigator>
            <RecipeTabStack.Screen
                style = {{
                    paddingTop: -20
                }}
                name = " "
                component = {recipeTab}
            />
            <RecipeTabStack.Screen
                 name = "RecipeDetails"
                 component = {RecipeDetails}
            />
        </RecipeTabStack.Navigator>
    )
}

export default RecipesDisplay

const styles = StyleSheet.create({})
