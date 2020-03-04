import React from 'react'
import { StyleSheet,View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {Button, Block, Input, Text} from "../components"
import {theme} from "../constants"
import ProductDetails from "./detailscreens/Products/ProductDetails"
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';


// import RecipeDetails from "../Recipes/RecipeDetails"
import Bake from "./detailscreens/Products/Bake"
import Cake from "./detailscreens/Products/Cake"

const ProductTabStack = createStackNavigator();

const productTab = ({navigation}) => {
    return (
        <Container style = {{marginTop: -60}}>
            <Header hasTabs/>
                <Tabs renderTabBar={()=> <ScrollableTab />}>
            <Tab heading="Bake">
                <Bake 
                    navigation = {navigation} 
                />
            </Tab>
            <Tab heading="Cake">
                <Cake 
                    navigation = {navigation}
                />
            </Tab>
            </Tabs>
        </Container>
    )
}


const Products = () => {
    return (
        <ProductTabStack.Navigator>
            <ProductTabStack.Screen
                name = "PRODUCTS"
                component = {productTab}
            />
            <ProductTabStack.Screen
                name = "ProductDetails"
                component = {ProductDetails}
            />
        </ProductTabStack.Navigator>
    )
}

export default Products

const styles = StyleSheet.create({})
