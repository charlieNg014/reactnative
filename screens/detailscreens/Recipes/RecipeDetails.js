import React, {useState} from 'react'
import { StyleSheet, View, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {Button, Block, Input, Text} from "../../../components"
import {theme} from "../../../constants"
import {useSelector} from "react-redux"
import {recipeList} from "../../../data"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const RecipeDetails = () => {
    //get the filtered cake/bake
    const productID = useSelector(state => state.getProductID.productID);
    // console.log(productID);

    const displayProduct = recipeList.find((filterProduct) => filterProduct.id === productID);
    // console.log(displayProduct);
    
    //change the tab
    const [showIng, setShowIng] = useState(true);
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
                        borderRightColor: "red",
                        borderRadius: 20,
                        width: "50%",
                        borderRadius: 0,
                        borderRadius: 10
                    }}>
                        <Text shadow>
                            {displayProduct.serving}
                        </Text>
                        <Text shadow bold>
                            Servings
                        </Text>
                    </Button>
                    <View style={{
                        borderStyle: "dashed",
                        height:50,
                        borderLeftWidth:1,
                        borderColor: "red"
                    }}/>
                    <Button disabled style = {{
                        width: 80,
                        alignItems: "center",
                        borderRightColor: "red",
                        borderRadius: 20,
                        width: "50%",
                        borderRadius: 10
                    }}>
                        <Text shadow>
                            {displayProduct.noOfIngredient}
                        </Text>
                        <Text shadow bold>
                            Ingredients
                        </Text>
                    </Button>
                </View>
                <View style = {styles.details}>
                    <View style={styles.button1}>
                        <Button style = {{
                                height: "100%",
                                alignItems: "center",
                                borderRightColor: "red",
                                borderRadius: 20,
                                width: "50%",
                                borderRadius: 0,
                                borderRadius: 0
                            }}
                            onPress = {() => {
                                setShowIng(true);
                            }}
                        >
                            <Text shadow bold>
                                Ingredients
                            </Text>
                        </Button> 
                        <View style={{
                            borderStyle: "dashed",
                            height:48,
                            borderLeftWidth:1,
                            borderColor: "lightblue"
                        }}/> 
                        <Button style = {{
                            alignItems: "center",
                            borderRightColor: "red",
                            borderRadius: 20,
                            width: "50%",
                            borderRadius: 0,
                            height: "100%"
                        }}
                            onPress = {() => {
                                setShowIng(false);
                            }}
                        >
                            <Text shadow bold>
                                Instructions
                            </Text>
                        </Button> 
                    </View>
                    {showIng ? 
                    (displayProduct.ingredient).map((item, index) => {
                        return (
                            <>
                            <View style={styles.button1}>
                                <Button disabled style = {{
                                    height: "100%",
                                    alignItems: "center",
                                    borderRightColor: "red",
                                    borderRadius: 20,
                                    width: "50%",
                                    borderRadius: 0,
                                    borderRadius: 0,
                                    backgroundColor: "whitesmoke"
                                }}>
                                <Text shadow bold style = {{alignSelf: "center",  fontSize: RFValue(5, 300), textAlign: "center"}}>
                                    {item.amount}
                                </Text>
                                </Button>
                                <Button disabled style = {{
                                    alignItems: "center",
                                    borderRightColor: "red",
                                    borderRadius: 20,
                                    width: "50%",
                                    borderRadius: 0,
                                    height: "100%",
                                    backgroundColor: "whitesmoke"
                                }}>
                                <Text shadow bold style = {{alignSelf: "center", fontSize: RFValue(5, 300), textAlign: "center"}}>
                                    {item.name}
                                </Text>
                                </Button>
                            </View>
                            <Text style = {{
                                    // borderBottomColor: 'red',
                                    // borderBottomWidth: 1, 
                                    width: 80,
                                    fontWeight: "bold", 
                                    marginTop: -15
                                }}
                            ></Text>
                            </>
                        )
                    })

                    : (displayProduct.instruction).map((item, index) => {
                        return (
                            <>
                            <View style={styles.button1}>
                                <Button disabled style = {{
                                    height: "100%",
                                    alignItems: "center",
                                    borderRightColor: "red",
                                    borderRadius: 20,
                                    width: "20%",
                                    borderRadius: 0,
                                    borderRadius: 0,
                                    backgroundColor: "whitesmoke"
                                }}>
                                <Text shadow bold style = {{alignSelf: "flex-start", marginLeft: 20}}>
                                    Step {item.step}
                                </Text>
                                </Button>
                                <Button disabled style = {{
                                    alignItems: "center",
                                    borderRightColor: "red",
                                    borderRadius: 20,
                                    width: "80%",
                                    borderRadius: 0,
                                    height: "100%",
                                    backgroundColor: "whitesmoke"
                                }}>
                                <Text shadow bold style = {{alignSelf: "flex-start", marginLeft: 30, fontSize: RFValue(5, 500)}}>
                                    {item.details}
                                </Text>
                                </Button>
                            </View>
                            <Text style = {{
                                    width: 50,
                                    fontWeight: "bold", 
                                    marginTop: -15
                                }}
                            ></Text>
                            </>
                        )
                    })}
                </View>
            </ScrollView>
        </>
    )
}

export default RecipeDetails

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
        flexDirection: "row",
        width: "80%",
        alignSelf: "center"
    },
    button1: {
        backgroundColor: "lightblue",
        height: 50,
        alignItems: "center",
        // borderRadius: 0,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 35,
        flexDirection: "row",
        width: "100%",
        alignSelf: "center",
        borderRadius: 5,
        marginTop: 0
    },
    details: {
        backgroundColor: "lightblue",
        height: 310,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 45,
        borderLeftColor: "black"
    }
})
