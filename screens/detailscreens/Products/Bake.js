import React, {useState} from 'react'
import { StyleSheet, View, Image, ScrollView} from 'react-native'
import {Button, Block, Input, Text} from "../../../components"
import {theme} from "../../../constants"
import { FlatList } from 'react-native-gesture-handler'
import {useDispatch} from 'react-redux'
import {getProductID} from "../../../redux"
import getProductIDReducer from '../../../redux/getProductID/getIDReducer'

const Bake = ({navigation}) => {
    const dispatch = useDispatch();
     ///define data
     const [productList] = useState([
        {price: "10.99", image: require("../../../assets/bake/bake1.png"), title: "The Bagel", availability: true, id: "1", type: "bake" },
        {price: "8.99",image: require('../../../assets/bake/bake2.png'), title: "Crossbed Bun", availability: true, id: "2", type: "bake"},
        {price: "12.99",image: require('../../../assets/bake/bake3.png'), title: "Cookie Crumble", availability: true, id: "3", type: "bake" },
        {price: "6.99",image: require('../../../assets/bake/cake1.png'), title: "Sweeties Pie", availability: true, id: "4", type: "cake" },
        {price: "9.99",image: require('../../../assets/bake/cake2.png'), title: "Patty Cakes", availability: true, id: "5", type: "cake" },
        {price: "4.99",image: require('../../../assets/bake/cake3.png'), title: "Petite Sweets", availability: true, id: "6", type: "cake" }
    ])

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
