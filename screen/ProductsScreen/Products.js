import React, { useState } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { Button } from '../../components'
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'

//screens
import ProductDetails from "./ProductDetails"
import Plants from "./insideScreen/Plants"
import Seeds from "./insideScreen/Seeds"
import Flowers from "./insideScreen/Flowers"
import Sprayers from "./insideScreen/Sprayers"
import Pots from "./insideScreen/Pots"
import Fertilizers from "./insideScreen/Fertilizers"


function RightTitle() {
    return (
    <View style = {styles.image}>
       <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/images/avatar.png')}
        />
    </View>
    );
}

// function LeftTitle () {
//     return(
//         <View style = {{
//             marginLeft: 20
//         }}>
//             <Icon 
//             name="list" 
//             />
//         </View>
//     )
// }

  const Stack = createStackNavigator();

export default function Products(navigation) {
        return (
            <Stack.Navigator>
                <Stack.Screen
                style = {styles.navbar}
                name="Products"
                component={ProductDetails}
                options={{ 
                    // headerTitle: props => <LogoTitle {...props} />,
                    headerRight: props => <RightTitle {...props} />,
                        // <Button
                        //   onPress={() => alert('This is a button!')}
                        //   title="Info"
                        //   color="#00cc00"
                        // />
                
                    //   ),
                    // headerLeft: props => <LeftTitle {...props} />,
                }}
                />
                <Stack.Screen 
                    name = "Plants"
                    component = {Plants}
                />
                <Stack.Screen 
                    name = "Seeds"
                    component = {Seeds}
                />
                <Stack.Screen 
                    name = "Flowers"
                    component = {Flowers}
                />
                <Stack.Screen 
                    name = "Sprayers"
                    component = {Sprayers}
                />
                <Stack.Screen 
                    name = "Pots"
                    component = {Pots}
                />
                <Stack.Screen 
                    name = "Fertilizers"
                    component = {Fertilizers}
                />
            </Stack.Navigator>
        )
    }

const styles = StyleSheet.create({
    image: {
        marginRight: 20
    }, 
    navbar: {
        height: 100
    }
})
