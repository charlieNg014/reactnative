import React, {useState} from 'react'
import { StyleSheet, View, Image, ScrollView} from 'react-native'
import {Button, Text} from "../../../components"
import { FlatList } from 'react-native-gesture-handler'
import {useDispatch} from 'react-redux'
import {getProductID} from "../../../redux"
import {productList} from "../../../data"

const BakeRecipe = ({navigation}) => {
    const dispatch = useDispatch();
    return (
     <>
     <ScrollView>
         <View style = {{backgroundColor: "lightgreen"}}>
            <View>
                <Text style = {styles.maintext}>
                    Recipe Generator
                </Text>
            </View>
            <View style = {{width: "100%"}}>
                <FlatList
                    numColumns = {2}
                    keyExtractor = {(item) => item.id}
                    data={productList}
                    // horizontal = {false}
                    renderItem={({ item }) => (
                        <ScrollView>
                            <View style = {styles.productmain}>
                                <View style = {styles.box}>
                                    <View style = {styles.insidebox}>
                                        <Button
                                            style = {styles.productdisplay}
                                            onPress = {() => {
                                                navigation.navigate("RecipeDetails")
                                                dispatch(getProductID(item.id));
                                            }}
                                        >
                                        <Image 
                                            style = {styles.image}
                                            source={item.image}
                                        />
                                        <Text style = {{textAlign: 'center', fontWeight: "bold", paddingBottom: 5, paddingTop: 10}}>
                                            {item.title}
                                        </Text>          
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    )}
                    />
            </View>
        </View>
    </ScrollView>
    </>
    )
}

export default BakeRecipe

const styles = StyleSheet.create({
    image: {
        height: 70,
        width: 120,
        alignSelf: "center"
    },
    productmain: {
        // backgroundColor: "lightblue", 
        height: 160
    }, 
    box: {
        height: 140,
        marginLeft: 5,
        marginRight: -25
    }, 
    insidebox: {
        height: 140
    }, 
    productdisplay: {
        backgroundColor: "whitesmoke",
        height: 140,
        marginTop: 9,
        marginRight: 35,
        width: 160,
        marginLeft: 5
        // marginRight: 10
    },
    maintext: {
        alignSelf: "center", 
        fontSize: 35,
        fontWeight: "bold",
        marginBottom: 30,
        marginTop: 20
    }
})
