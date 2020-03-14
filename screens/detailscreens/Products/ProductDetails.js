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
import {getProductID, addToCart, updateInCart} from "../../../redux"
import {productList} from "../../../data"


const ProductTest = ({navigation}) => {
    const dispatch = useDispatch();
    const productID = useSelector(state => state.getProductID.productID);
    // console.log(testingData);

    const updatedProductList = useSelector(state => state.addToCart.productCart);
    // console.log(updatedProductList);

    //get the latest productlist
    const latestProductList = useSelector(state => state.updateInCart.inCartProductList);
    // console.log(latestProductList);

    if (latestProductList.length === 0) {
        dispatch(updateInCart(productList));
    } else {
        // console.log(productList);
    }

    for (var i = 0; i < updatedProductList.length; i++) {
        // console.log(updatedProductList[i].id);

        for (var y = 0; y < productList.length; y++) {
            if (updatedProductList[i].id === productList[y].id) {
                // console.log(productList[y])
                productList.splice(y, 1, updatedProductList[i]);
                // console.log(productList);
            }
        }
    }

    //changing the state of cart for specific product
    let [newDisplayProduct, setNewDisplayProduct] = useState({});
    const displayProduct = productList.find((filterProduct) => filterProduct.id === productID);
    // console.log(displayProduct);

    const changeCartState = (requiredItem) => {
        let id = requiredItem.id;
        let price = requiredItem.price;
        let image = requiredItem.image;
        let title = requiredItem.title;
        let availability = requiredItem.availability;
        let amount = requiredItem.amount;
        let inCart = true;

        setNewDisplayProduct(
            newDisplayProduct = {
                id,
                price,
                image,
                title,
                availability,
                amount,
                inCart
            }
        )

        // console.log(newDisplayProduct);
    }

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
            {!displayProduct.inCart 
            ? <Button style = {styles.favbutton} onPress = {() => {
                showAlert();
                changeCartState(displayProduct);
                dispatch(addToCart(newDisplayProduct));
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
