import React, {useState} from 'react'
import { StyleSheet, View, Image, Dimensions, Animated, ScrollView, ImageBackground} from 'react-native'
import {Button, Block, Input, Text} from "../../components"
import {theme} from "../../constants"
import { FlatList } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get("window");
import {useDispatch, useSelector} from 'react-redux'
import {getProductID} from "../../redux"
import {productList} from "../../data"


const HomeDetails = ({navigation}) => {
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
        <ImageBackground source = {require("../../assets/bake/background.jpg")} style = {{width: "100%", height: "100%"}}>
            <ScrollView>    
                <View>
                <Block>
                    <View style = {{paddingTop: 10}}>
                        {renderIllustrations()}
                        {renderSteps()}
                    </View>
                    <View style = {{width: "80%", alignSelf: "center"}}>
                        <Text style = {{
                            fontSize: 15,
                            textAlign: "center",
                            paddingTop: 10, 
                            color: "brown"
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
                            marginBottom: 15,
                            fontWeight: "bold"
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
                        marginTop: 20,
                        fontWeight: "bold"
                    }}>
                        Catalogues & Recipes
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
                                                    navigation.navigate("RecipeDetails");
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
    </ImageBackground> 
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
