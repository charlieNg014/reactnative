import React, {useState} from 'react'
import { StyleSheet, View, Image, Dimensions, Animated, ScrollView} from 'react-native'
import {Button, Block, Input, Text} from "../../components"
import {theme} from "../../constants"
import { FlatList } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get("window");
import {useDispatch} from 'react-redux'
import {getProductID} from "../../redux"


const HomeDetails = ({navigation}) => {
    ///define data
    const [productList] = useState([
        {price: "8.99",image: require('../../assets/bake/bake2.png'), title: "Crossbed Bun", availability: true, id: "2" },
        {price: "12.99",image: require('../../assets/bake/bake3.png'), title: "Cookie Crumble", availability: true, id: "3" },
        {price: "6.99",image: require('../../assets/bake/cake1.png'), title: "Sweeties Pie", availability: true, id: "4" },
        {price: "9.99",image: require('../../assets/bake/cake2.png'), title: "Patty Cakes", availability: true, id: "5" },
        {price: "4.99",image: require('../../assets/bake/cake3.png'), title: "Petite Sweets", availability: true, id: "6" }
    ])

    const [recipes] = useState([
        {id: "1", title: "Recipe 1", type: "bake", image: ""},
        {id: "2", title: "Recipe 2", type: "bake", image: ""},
        {id: "3", title: "Recipe 3", type: "cake", image: ""},
        {id: "4", title: "Recipe 4", type: "patisserie", image: ""}
    ])

    const [illustrations] = useState([
        { id: 1, source: require("../../assets/bake/firstimage.png") }
       ,{ id: 2, source: require("../../assets/bake/secondimage.png") }
       ,{ id: 3, source: require("../../assets/bake/thirdimage.png") }
     ])
     const [scrollX] = useState(new Animated.Value(0));
     const renderIllustrations = () => {
        return (
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            data={illustrations}
            // extraDate={this.state}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item }) => (
              <Image
                source={item.source}
                resizeMode="contain"
                // style={{ width, height: height / 2, overflow: "visible" }}
                style={{ width, height: 150, overflow: "visible" }}
              />
            )}
            onScroll={Animated.event([
              {
                nativeEvent: { contentOffset: { x: scrollX } }
              }
            ])}
          />
        );
      }
     const renderSteps = () => {
        const stepPosition = Animated.divide(scrollX, width);
        return (
          <Block row center middle style={styles.stepsContainer}>
            {illustrations.map((item, index) => {
              const opacity = stepPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.4, 1, 0.4],
                extrapolate: "clamp"
              });
    
              return (
                <Block
                  animated
                  flex={false}
                  key={`step-${index}`}
                  color="gray"
                  style={[styles.steps, { opacity }]}
                />
              );
            })}
          </Block>
        );
      }

      const dispatch = useDispatch();

    return (
        <>
        <ScrollView>
            <View style = {{backgroundColor: "#00ffc4"}}>
                <Block>
                    <View style = {{paddingTop: 10}}>
                        {renderIllustrations()}
                        {renderSteps()}
                    </View>
                    <View style = {{width: "80%", alignSelf: "center"}}>
                        <Text style = {{
                            fontSize: 15,
                            textAlign: "center",
                            paddingTop: 10
                        }}>
                            I always put all of my heart, my passion to every single bake I make - Daniel 
                        </Text>
                    </View>
                </Block>
                {/* Products */}
                <Block>
                    <View style = {{
                        alignItems: "center"
                    }}>
                        <Text style = {{
                            alignContent: "center",
                            fontSize: 20,
                            marginBottom: 15
                        }}>
                            What's New
                        </Text>
                    </View>
                    <View style = {{width: "100%"}}>
                        <FlatList
                            numColumns = {1}
                            keyExtractor = {(item) => item.id}
                            data={productList}
                            horizontal 
                            renderItem={({ item }) => (
                                <View style = {styles.productmain}>
                                    <View style = {styles.box}>
                                        {/* <View style={styles.text}> */}
                                            <View style = {styles.insidebox}>
                                                <Button
                                                    style = {styles.productdisplay}
                                                    onPress = {() => {
                                                        navigation.navigate("ProductDetails");
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
                                // </View>
                            )}
                            />
                    </View>
                </Block>
            {/* Recipes  */}
            <Block>
                <View style = {{
                    alignItems: "center",
                }}>
                    <Text style = {{
                        alignContent: "center",
                        fontSize: 20,
                        marginBottom: 15, 
                        marginTop: 20
                    }}>
                        Catalogues & Recipes
                    </Text>
                </View>
                <View style = {{width: "100%"}}>
                    <FlatList
                        numColumns = {1}
                        keyExtractor = {(item) => item.id}
                        data={recipes}
                        horizontal 
                        renderItem={({ item }) => (
                            <View style = {styles.productmain}>
                               <View style = {styles.box}>
                                    {/* <View style={styles.text}> */}
                                        <View style = {styles.insidebox}>
                                            <Button
                                                style = {styles.productdisplay}
                                                onPress = {() => navigation.navigate("RecipeDetails")}
                                            >
                                            <Image 
                                                style = {styles.image}
                                                source={item.image}
                                            />
                                            <Text style = {{textAlign: 'center', fontWeight: "bold", paddingBottom: 5, paddingTop: 10}}>
                                                {item.title}
                                            </Text>
                                            <Text style = {{textAlign: 'center', color: "grey"}}>
                                                {item.type}
                                            </Text>           
                                            </Button>
                                        </View>
                                    </View>
                                </View>
                            // </View>
                        )}
                        />
                </View>
            </Block>
        </View>
        </ScrollView> 
        </>
    )
}

export default HomeDetails

const styles = StyleSheet.create({
    image: {
        height: 70,
        width: 120,
        alignSelf: "center"
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
    }
})
