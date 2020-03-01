import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'
import ShopDetails from "./ShopDetails"


function RightTitle() {
    return (
    <View style = {{
        marginRight: 20
    }}>
        <Icon 
            name = "home"
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

export default class Shops extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                name="Shoppings"
                component={ShopDetails}
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
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({})
