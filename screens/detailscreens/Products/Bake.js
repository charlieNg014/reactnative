import React, {useState} from 'react'
import { StyleSheet, View, Image, ScrollView} from 'react-native'
import {Button, Block, Input, Text} from "../../../components"
import {theme} from "../../../constants"
import { FlatList } from 'react-native-gesture-handler'
import {useDispatch} from 'react-redux'
import {getProductID} from "../../../redux"
import getProductIDReducer from '../../../redux/getProductID/getIDReducer'
import {productList} from "../../../data"

const Bake = ({navigation}) => {
    const dispatch = useDispatch();
    return (
     <>
     <ScrollView>
        <View style = {{backgroundColor: "lightblue"}}>
            <View>
                <Text style = {styles.maintext}>
                    All our lovely cakes
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
                                            navigation.navigate("ProductDetails")
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
                                    <Text style = {{textAlign: 'center', color: "grey"}}>
                                        ${item.price}
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

export default Bake

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
