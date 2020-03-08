import React, {useState} from 'react'
import { StyleSheet, View, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {Button, Block, Input, Text} from "../../../components"
import {theme} from "../../../constants"

const RecipeDetails = () => {
    const [productList]  = useState([
        {id: "1", title: "I", number: "1"},
        {id: "2", title: "am", number: "2"},
        {id: "3", title: "Charlie", number: "3"}
    ])
    return (
        <>
            <ScrollView>
                {/* // Image  */}
                <View style = {styles.image}>
                    <Image 
                        // source = {displayProduct.image}
                        style = {{width: "50%", height: "100%"}}
                    />
                </View>
                 {/* // titlte */}
                <View style = {styles.text}>
                    <Text style = {{
                        marginTop: 20,
                        fontSize: 30
                    }}>
                        {/* {displayProduct.title} */}
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
                            3
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
                            8
                        </Text>
                        <Text shadow bold>
                            Ingredients
                        </Text>
                    </Button>
                </View>
                <View style = {styles.details}>
                    <View style={styles.button1}>
                        <Button disabled style = {{
                            height: "100%",
                            alignItems: "center",
                            borderRightColor: "red",
                            borderRadius: 20,
                            width: "50%",
                            borderRadius: 0,
                            borderRadius: 0
                        }}>
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
                        <Button disabled style = {{
                            alignItems: "center",
                            borderRightColor: "red",
                            borderRadius: 20,
                            width: "50%",
                            borderRadius: 0,
                            height: "100%"
                        }}>
                            <Text shadow bold>
                                Instructions
                            </Text>
                        </Button> 
                    </View>
                    {productList.map((item, index) => {
                        return (
                            <>
                            <View style={styles.button1}>
                                <Button disabled style = {{
                                    height: "100%",
                                    alignItems: "center",
                                    borderRightColor: "red",
                                    borderRadius: 20,
                                    width: "65%",
                                    borderRadius: 0,
                                    borderRadius: 0,
                                    backgroundColor: "whitesmoke"
                                }}>
                                <Text shadow bold style = {{alignSelf: "flex-start", marginLeft: 20}}>
                                    {item.id}
                                </Text>
                                </Button>
                                {/* <View style={{
                                    borderStyle: "dashed",
                                    height:48,
                                    borderLeftWidth:1,
                                    borderColor: "lightblue"
                                }}/> */}
                                <Button disabled style = {{
                                    alignItems: "center",
                                    borderRightColor: "red",
                                    borderRadius: 20,
                                    width: "35%",
                                    borderRadius: 0,
                                    height: "100%",
                                    backgroundColor: "whitesmoke"
                                }}>
                                <Text shadow bold style = {{alignSelf: "flex-start", marginLeft: 5}}>
                                    {item.title}
                                </Text>
                                </Button>
                            </View>
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
        height: 300,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 45,
        borderLeftColor: "black"
    }
})
