import React, { useState } from 'react'
import {StyleSheet, View, Image} from 'react-native'
import {Button, Block, Input, Text} from "../../components"
import {theme} from "../../constants"
import { FlatList } from 'react-native-gesture-handler'


export default function ProductDetails ({navigation}) {
     //define array
     const [productList] = useState([
        {name: "Plants", numberOfProducts: "10", icon: require('../../assets/icons/plants.png'), id: '1'},
        {name: "Seeds", numberOfProducts: "16", icon: require('../../assets/icons/seeds.png'),  id: '2'},
        {name: "Flowers", numberOfProducts: "63", icon: require('../../assets/icons/flowers.png'),  id: '3'},
        {name: "Sprayers", numberOfProducts: "17", icon: require('../../assets/icons/sprayers.png'),  id: '4'},
        {name: "Pots", numberOfProducts: "47", icon: require('../../assets/icons/pots2x.png'),  id: '5'},
        {name: "Fertilizers", numberOfProducts: "9", icon: require('../../assets/icons/fertilizers.png'),  id: '6'}
    ]);
    return (
        <>
        <Block>
            <View style = {styles.main}>
                <FlatList
                    numColumns = {2}
                    keyExtractor = {(item) => item.id}
                    data={productList}
                    horizontal = {false}
                    renderItem={({ item }) => (
                        <View style = {styles.box}>
                            <View style={styles.text}>
                                <View style = {styles.insidebox}>
                                    <Button
                                        onPress = {() => navigation.navigate(`${item.name}`)}
                                    >
                                        <Text style = {{textAlign: 'center', width: 145, height: 35}}>
                                            <Image
                                                source={item.icon}
                                            />
                                        </Text>
                                        <Text style = {{textAlign: 'center', fontWeight: "bold", paddingBottom: 5}}>
                                            {item.name}
                                        </Text>
                                        <Text style = {{textAlign: 'center', color: "grey"}}>
                                            {item.numberOfProducts} products
                                        </Text>           
                                    </Button>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </Block>
        </>
    )
}

const styles = StyleSheet.create({
    main: {
        marginTop: 30,
        height: 530
    },
    box: {
        marginTop: 5,
        width: "50%"
    },
    text: {
        marginBottom: 20,
        justifyContent: "center",
        width: "100%",
        textAlign: 'center'
    }, 
    insidebox: {
        backgroundColor: "white", 
        width: "80%",  
        marginLeft: 20, 
        marginRight: 10,
        height: 150,
        paddingTop: 35,
        borderRadius: 10
    }
})
