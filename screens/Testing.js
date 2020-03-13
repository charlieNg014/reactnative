import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const Testing = () => {
    return (
        <View style={{marginTop: 100, backgroundColor: "lightblue"}}>
            <Text style = {styles.welcome}>
                test
            </Text>
        </View>
    )
}

export default Testing

const styles = StyleSheet.create({
    welcome: {
        fontSize: RFValue(15, 100), // second argument is standardScreenHeight(optional),
        textAlign: "center",
        margin: 10,
      },
})
