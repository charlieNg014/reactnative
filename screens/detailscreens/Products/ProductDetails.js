import React, {useState} from 'react'
import { StyleSheet, View, Image } from 'react-native'
import {Button, Block, Input, Text} from "../../../components"
import {theme} from "../../../constants"
// import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';


const ProductTest = ({navigation}) => {
    ///define data for testing 
    const [product] = useState([
        {price: "10.99", image: require("../../../assets/bake/bake2.png"), title: "The Bagel", availability: true, id: "1", type: "bake" }
    ])

    const [heartColor, setHeartColor] = useState(false); 
    const setColor = (requiredColor) => {
        if(requiredColor === false) {
            setHeartColor(true)
        } else if (requiredColor === true) {
            setHeartColor(false)
        }

        console.log(heartColor);
        
    }
    return (
        <>
        {/* // Image  */}
        <View style = {styles.image}>
            <Image 
                source = {product[0].image}
                style = {{width: "50%", height: "100%"}}
            />
        </View>
        {/* // titlte */}
        <View style = {styles.text}>
            <Text style = {{
                marginTop: 20,
                fontSize: 30
            }}>
                {product[0].title}
            </Text> 
            <Text style = {{
                    borderBottomColor: 'red',
                    borderBottomWidth: 1, 
                    width: 80,
                    fontWeight: "bold", 
                    marginTop: -15
                }}
            > </Text>
        </View>
        {/* button  */}
        <View style={styles.button}>
            <Button disabled style = {{
                width: 125,
                alignItems: "center",
                backgroundColor: "white",
                borderRightColor: "red",
                borderRadius: 0,
                marginRight: -2
            }}>
                <Text shadow>
                    Picnic/birthday
                </Text>
                <Text shadow>
                    Purpose
                </Text>
            </Button>
            <Button disabled style = {styles.mybutton}>
            <Text shadow>
                    2 days
                </Text>
                <Text shadow>
                    Lasting
                </Text>
            </Button>
            <Button style = {styles.mybutton}>
                <Text>
                    Add to favourite
                </Text>
                <Icon
                    name='heart'
                    // color = `${heartColor ===  true ? "red" : "lightblue"}`
                    // {...heartColor ===  false ? color: "red" : color: "black"}
                    color = "red"
                    onPress = {() => setColor(heartColor)}
                />
            </Button>
        </View>
        {/* details  */}
        <View style = {styles.details}>
            <Button style = {{
                backgroundColor: "white",
                marginTop: -5,
                alignItems: "center",
                // borderBottomColor: 'black',
                // borderBottomWidth: 1, 
                fontWeight: "bold",
                backgroundColor: "lightblue"
               
            }}>
                <Text style = {{
                    fontSize: 20,
                    fontWeight: "bold"
                }}>
                    Product Details 
                </Text>
            </Button>
        </View>
        </>
    )
}

export default ProductTest

const styles = StyleSheet.create({
    image: {
        backgroundColor: "white",
        height: 180,
        alignItems: "center",
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15
    }, 
    text: {
        alignItems: "center"
    },
    button: {
        backgroundColor: "white",
        height: 50,
        alignItems: "center",
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 35,
        flexDirection: "row"
    },
    mybutton: {
        width: 125,
        alignItems: "center",
        backgroundColor: "white",
        borderRightColor: "red",
        borderRadius: 0
    },
    details: {
        backgroundColor: "white",
        height: 380,
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 45
    }, 
})
