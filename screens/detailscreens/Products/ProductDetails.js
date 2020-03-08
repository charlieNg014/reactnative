import React, {useState, } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import {Button, Block, Input, Text} from "../../../components"
import {theme} from "../../../constants"
// import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import AwesomeAlert from 'react-native-awesome-alerts';
import {TouchableOpacity } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import {getProductID, addToCart} from "../../../redux"


const ProductTest = ({navigation}) => {
    const dispatch = useDispatch();
    ///define data for testing 
    const [product] = useState([
        {price: "10.99", image: require("../../../assets/bake/bake2.png"), title: "The Bagel", availability: true, id: "1", type: "bake" }
    ])

    const [productList] = useState([
        {price: "10.99", image: require("../../../assets/bake/bake1.png"), title: "The Bagel", availability: true, id: "1", type: "bake" },
        {price: "8.99",image: require('../../../assets/bake/bake2.png'), title: "Crossbed Bun", availability: true, id: "2", type: "bake"},
        {price: "12.99",image: require('../../../assets/bake/bake3.png'), title: "Cookie Crumble", availability: true, id: "3", type: "bake" },
        {price: "6.99",image: require('../../../assets/bake/cake1.png'), title: "Sweeties Pie", availability: true, id: "4", type: "cake" },
        {price: "9.99",image: require('../../../assets/bake/cake2.png'), title: "Patty Cakes", availability: true, id: "5", type: "cake" },
        {price: "4.99",image: require('../../../assets/bake/cake3.png'), title: "Petite Sweets", availability: true, id: "6", type: "cake" }
    ])
    const productID = useSelector(state => state.getProductID.productID);
    // console.log(testingData);

    const displayProduct = productList.find((filterProduct) => filterProduct.id === productID);
    // console.log(displayProduct);

    const [heartColor, setHeartColor] = useState(false); 
    const setColor = (requiredColor) => {
        if(requiredColor === false) {
            setHeartColor(true)
        } else if (requiredColor === true) {
            setHeartColor(false)
        }

        console.log(heartColor);
        
    }
    const [favShow, setFavShow] = useState(true);
    const [inFav, setInFav] = useState(false);
    const [alert, setAlert] = useState(false);
    const showAlert = () => {
        setAlert(true)
        setFavShow(false)
    }

    const hideAlert = () => {
        setAlert(false)
    }


    return (
        <>
        <ScrollView>
        {/* // Image  */}
        <View style = {styles.image}>
            <Image 
                source = {displayProduct.image}
                style = {{width: "50%", height: "100%"}}
            />
        </View>
        {/* // titlte */}
        <View style = {styles.text}>
            <Text style = {{
                marginTop: 20,
                fontSize: 30
            }}>
                {displayProduct.title}
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
                width: 80,
                alignItems: "center",
                // backgroundColor: "red",
                borderRadius: 0,
                width: "30%"
            }}>
                <Text shadow>
                    Picnic
                </Text>
                <Text shadow>
                    Purpose
                </Text>
            </Button>
            <View style={{
                borderStyle: "dashed",
                height:46,
                borderLeftWidth:1,
                borderColor: "grey"
            }}/>
            <Button disabled style = {styles.mybutton}>
            <Text shadow>
                    2 days
                </Text>
                <Text shadow>
                    Lasting
                </Text>
            </Button>
            <View style={{
                borderStyle: "dashed",
                height:46,
                borderLeftWidth:1,
                borderColor: "grey"
            }}/>
            {favShow 
            ? <Button style = {styles.favbutton} onPress = {() => {
                showAlert();
                dispatch(addToCart(displayProduct));
            }}
            >
            <Text>
                Add to cart
            </Text>
            <Icon
                name='heart'
                // color = `${heartColor ===  true ? "red" : "lightblue"}`
                // {...heartColor ===  false ? color: "red" : color: "black"}
                color = "red"
                onPress = {() => setColor(heartColor)}
            />
            </Button> 
            : <Button style = {styles.favbuttonhidden} disabled>
            <Text>
                 In Cart
            </Text>
            <Icon
                name='heart'
                // color = `${heartColor ===  true ? "red" : "lightblue"}`
                // {...heartColor ===  false ? color: "red" : color: "black"}
                color = "red"
                onPress = {() => setColor(heartColor)}
            />
            </Button>}
        </View>
        {/* details  */}
        <View style = {styles.details}>
            <Button disabled style = {{
                    width: "100%",
                    alignItems: "center",
                    backgroundColor: "lightblue",
                    borderRightColor: "red",
                    borderRadius: 0,
                    marginTop: 0
                    // marginRight: -2
            }}>
                <Text shadow style = {{fontSize: 25, fontWeight: "bold"}}> 
                    Product Details
                </Text>
            </Button>
            <Button disabled style = {styles.textbox}>
                <Text shadow style ={styles.texttitle}>
                    Category
                </Text>
                <Text shadow style = {styles.textdetails}>
                    {displayProduct.type}
                </Text>
            </Button>
            <Button disabled style = {styles.textbox}>
                <Text shadow style ={styles.texttitle}>
                    Brand
                </Text>
                <Text shadow style = {styles.textdetails}>
                    details goes here  
                </Text>
            </Button>
            <Button disabled style = {styles.textbox}>
                <Text shadow style ={styles.texttitle}>
                    Application
                </Text>
                <Text shadow style = {styles.textdetails}>
                    details goes here
                </Text>
            </Button>
            <Button disabled style = {styles.textbox}>
                <Text shadow style ={styles.texttitle}>
                    Description
                </Text>
                <Text shadow style = {styles.textdetails}>
                    details goes here
                </Text>
            </Button>
        </View>
        <AwesomeAlert
                show={alert}
                showProgress={false}
                // title="AwesomeAlert"
                message="Added to cart"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={true}
                showCancelButton={true}
                // showConfirmButton={true}
                cancelText="Okay"
                // confirmText="Yes, delete it"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    hideAlert();
                }}
                // onConfirmPressed={() => {
                //     hideAlert();
                // }}
        />
        </ScrollView>
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
        // backgroundColor: "red",
        height: 40,
        alignItems: "center",
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 35,
        flexDirection: "row",
        width: "95%"
    },
    mybutton: {
        width: "35%",
        alignItems: "center",
        // backgroundColor: "lightblue",
        borderRadius: 0
        // display: "none"
    },
    favbutton: {
        alignItems: "center",
        // backgroundColor: "yellow",
        width: "35%",
        borderRadius: 0
    },
    favbuttonhidden: {
        alignItems: "center",
        // display: "none",
        borderRadius: 0,
        width: "35%"
    },
    details: {
        backgroundColor: "white",
        height: 462,
        // borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 45,
        borderLeftColor: "black"
    },
    textbox: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "lightblue",
        borderRightColor: "red",
        marginTop: -6,
        height: 100,
        borderRadius: 0 
    },
    texttitle: {
        textDecorationColor: "black",
        fontSize: 15,
        marginTop: -30,
        fontWeight: "bold"
    },
    textdetails: {
        marginTop: 20
    }
})
