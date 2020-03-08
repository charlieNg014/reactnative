import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useSelector} from "react-redux"
import { FlatList } from 'react-native-gesture-handler'
import { Image, Dimensions, Animated, ScrollView} from 'react-native'
import { Container, Header, Content, Button } from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons"
import {useDispatch} from 'react-redux'
import {getProductID} from "../../../redux"
import {updateCart} from "../../../redux"

const cartDisplay = ({navigation}) => {
    const dispatch = useDispatch();
    //get the array of product
    const mycart = useSelector(state => state.addToCart.productCart);
    // console.log(mycart);

    console.log("-------")

    const newCart = useSelector(state => state.updateCart.updatedCart);
    console.log(newCart);

    //define state of numbers of items ordered
    const [amount, setAmount] = useState(1);

    const [productList] = useState([
        {price: "8.99",image: require('../../../assets/bake/bake2.png'), title: "Crossbed Bun", availability: true, id: "2" },
        {price: "12.99",image: require('../../../assets/bake/bake3.png'), title: "Cookie Crumble", availability: true, id: "3" }
    ])

    //remove the seleted product
    //get index of array


    return (
        <>
        <ScrollView>
            {(mycart.length === 0 && newCart.length === 0) 
            ?
            <> 
            <View style = {{width: "100%"}}>
            <View style = {styles.empty}>
                {/* <Image 
                    source = {displayProduct.image}
                    style = {{width: "50%", height: "100%"}}
                /> */}
                <Text style = {{marginTop: 15}}>
                    Unfortunately, you don't have any products in cart
                </Text>
            </View>
            <View style = {styles.image2}>
                <View style = {{flexDirection: "row"}}>
                    <Text style = {styles.text}>
                        Subtotal: 
                    </Text>
                    <Text style = {styles.amount}>
                        0
                    </Text>
                </View>
                <View style = {{flexDirection: "row"}}>
                    <Text style = {styles.text}>
                        Taxes: 
                    </Text>
                    <Text style = {styles.amount}>
                        0
                    </Text>
                </View>
                <View style = {{flexDirection: "row"}}>
                    <Text style = {styles.text}>
                        Total: 
                    </Text>
                    <Text style = {styles.amount}>
                        0
                    </Text>
                </View>
            </View>
            </View>
            </> 
            :(mycart.length !== 0 && newCart.length === 0) 
            ? 
            <>
            <View style = {{width: "100%"}}>
                <FlatList
                    style = {{width: "100%"}}
                    numColumns = {1}
                    keyExtractor = {(item) => item.id}
                    data={mycart}
                    horizontal 
                    renderItem={({ item }) => (
                        <>
                        <View style = {styles.image}>
                            <Button transparent style = {{alignSelf: "flex-start", marginTop: 5, marginLeft: 10}} onPress = {() => {
                                //get index 
                                // console.log(mycart.indexOf(item));
                                //remove from array
                               mycart.splice(mycart.indexOf(item), 1);
                               console.log(dispatch(updateCart(mycart)));
                            // console.log("test1");
                            
                            }}>
                                <Icon name = "remove-circle" size = {20}/>
                            </Button>
                            <Image 
                                source = {item.image}
                                style = {{width: "70%", height: "50%", marginTop: -45}}
                            />
                            <Text style = {{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1, 
                                    width: "100%",
                                    fontWeight: "bold", 
                                    marginTop: -15
                                }}
                            ></Text>
                            <Text style = {styles.title}>
                                {item.title}
                            </Text>
                            <Text>
                                ${item.price}
                            </Text>
                            <View style = {{flexDirection: "row", marginTop: 15}}>
                                <Button light style = {{width: 35, justifyContent: "center"}} onPress = {() => {
                                    if (amount > 1) {
                                        setAmount(amount - 1)
                                    }
                                }}>
                                    <Icon name = "remove" size = {25}/>
                                </Button>
                                <Button disabled style = {{width: 80, justifyContent: "center", backgroundColor: "white"}}> 
                                    <Text>
                                        {amount}
                                    </Text>
                                </Button>
                                <Button light style = {{width: 35, justifyContent: "center"}} onPress = {() => {
                                    if (amount <10) {
                                        setAmount(amount + 1)
                                    }
                                }}>
                                    <Icon name = "add" size = {25}/>
                                </Button>
                            </View>
                        </View>
                        </>
                    )}
                />
            </View>
            <View style = {styles.image2}>
                <View style = {{flexDirection: "row"}}>
                    <Text style = {styles.text}>
                        Subtotal: 
                    </Text>
                    <Text style = {styles.amount}>
                        12
                    </Text>
                </View>
                <View style = {{flexDirection: "row"}}>
                    <Text style = {styles.text}>
                        Taxes: 
                    </Text>
                    <Text style = {styles.amount}>
                        12
                    </Text>
                </View>
                <View style = {{flexDirection: "row"}}>
                    <Text style = {styles.text}>
                        Total: 
                    </Text>
                    <Text style = {styles.amount}>
                        12
                    </Text>
                </View>
            </View>
            <Button success style = {styles.checkout}><Text style = {{alignSelf: "center", marginLeft: 5}}> Proceed to checkout </Text></Button> 
            </>
            : (mycart.length !== 0 && newCart.length !== 0) 
            ? 
            <>
            <View style = {{width: "100%"}}>
                <FlatList
                    style = {{width: "100%"}}
                    numColumns = {1}
                    keyExtractor = {(item) => item.id}
                    data={mycart}
                    horizontal 
                    renderItem={({ item }) => (
                        <>
                        <View style = {styles.image}>
                            <Button transparent style = {{alignSelf: "flex-start", marginTop: 5, marginLeft: 10}} onPress = {() => {
                                //get index 
                                // console.log(mycart.indexOf(item));
                                //remove from array
                               mycart.splice(mycart.indexOf(item), 1);
                               dispatch(updateCart(item));
                            console.log("test2");
                            
                            }}>
                                <Icon name = "remove-circle" size = {20}/>
                            </Button>
                            <Image 
                                source = {item.image}
                                style = {{width: "70%", height: "50%", marginTop: -45}}
                            />
                            <Text style = {{
                                    borderBottomColor: 'grey',
                                    borderBottomWidth: 1, 
                                    width: "100%",
                                    fontWeight: "bold", 
                                    marginTop: -15
                                }}
                            ></Text>
                            <Text style = {styles.title}>
                                {item.title}
                            </Text>
                            <Text>
                                ${item.price}
                            </Text>
                            <View style = {{flexDirection: "row", marginTop: 15}}>
                                <Button light style = {{width: 35, justifyContent: "center"}} onPress = {() => {
                                    if (amount > 1) {
                                        setAmount(amount - 1)
                                    }
                                }}>
                                    <Icon name = "remove" size = {25}/>
                                </Button>
                                <Button disabled style = {{width: 80, justifyContent: "center", backgroundColor: "white"}}> 
                                    <Text>
                                        {amount}
                                    </Text>
                                </Button>
                                <Button light style = {{width: 35, justifyContent: "center"}} onPress = {() => {
                                    if (amount <10) {
                                        setAmount(amount + 1)
                                    }
                                }}>
                                    <Icon name = "add" size = {25}/>
                                </Button>
                            </View>
                        </View>
                        </>
                    )}
                />
            </View>
            <View style = {styles.image2}>
                <View style = {{flexDirection: "row"}}>
                    <Text style = {styles.text}>
                        Subtotal: 
                    </Text>
                    <Text style = {styles.amount}>
                        12
                    </Text>
                </View>
                <View style = {{flexDirection: "row"}}>
                    <Text style = {styles.text}>
                        Taxes: 
                    </Text>
                    <Text style = {styles.amount}>
                        12
                    </Text>
                </View>
                <View style = {{flexDirection: "row"}}>
                    <Text style = {styles.text}>
                        Total: 
                    </Text>
                    <Text style = {styles.amount}>
                        12
                    </Text>
                </View>
            </View>
            <Button success style = {styles.checkout}><Text style = {{alignSelf: "center", marginLeft: 5}}> Proceed to checkout </Text></Button> 
            </>
            :<>
            <View style = {{width: "100%"}}>
            <View style = {styles.empty}>
                {/* <Image 
                    source = {displayProduct.image}
                    style = {{width: "50%", height: "100%"}}
                /> */}
                <Text style = {{marginTop: 15}}>
                    Unfortunately, you don't have any products in cart
                </Text>
            </View>
            </View>
            <View style = {styles.image2}>
                <View style = {{flexDirection: "row"}}>
                    <Text style = {styles.text}>
                        Subtotal: 
                    </Text>
                    <Text style = {styles.amount}>
                        12
                    </Text>
                </View>
                <View style = {{flexDirection: "row"}}>
                    <Text style = {styles.text}>
                        Taxes: 
                    </Text>
                    <Text style = {styles.amount}>
                        12
                    </Text>
                </View>
                <View style = {{flexDirection: "row"}}>
                    <Text style = {styles.text}>
                        Total: 
                    </Text>
                    <Text style = {styles.amount}>
                        12
                    </Text>
                </View>
            </View>
            <Button success style = {styles.checkout}><Text style = {{alignSelf: "center", marginLeft: 5}}> Proceed to checkout </Text></Button> 
            </>
            }
        </ScrollView>
        </>
    )
}

export default cartDisplay

const styles = StyleSheet.create({
    image: {
        backgroundColor: "white",
        height: 300,
        alignItems: "center",
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        width: 200
    },
    productmain: {
        backgroundColor: "lightblue", 
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
        height: 140,
        marginTop: 9,
        marginRight: 35,
        width: 150
    },
    title: {
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 10
    },
    image2: {
        backgroundColor: "white",
        height: 150,
        alignItems: "center",
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        width: "95%"
    },
    text: {
        width: "60%",
        marginTop: 20,
        fontWeight: "bold"
    },
    amount: {
        marginTop: 20
    },
    checkout: {
        // backgroundColor: "ligt",
        borderRadius: 20,
        // marginLeft: 10,
        // marginRight: 10,
        marginTop: 15,
        marginTop: 30,
        width: "40%",
        alignSelf: "center"
    }
    ,empty: {
        backgroundColor: "white",
        height: 50,
        alignItems: "center",
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop:30,
        width: "95%"
    }
})
