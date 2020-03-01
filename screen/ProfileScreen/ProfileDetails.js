import React, { Component } from 'react'
import {View } from 'react-native'
import {
    ActivityIndicator, 
    Keyboard, 
    KeyboardAvoidingView,
    StyleSheet
} from "react-native"

import {Button, Block, Input, Text} from "../../components"
import {theme} from "../../constants"

export default class ProfileDetails extends Component {
    render() {
        return (
            <KeyboardAvoidingView style = {styles.login} behavior = "padding">
                <Block padding = {[0, theme.sizes.base * 2]}>
                    <Text>
                        username goes here
                    </Text>
                    <Button>
                        <Text>
                            View and eit profile 
                        </Text>
                    </Button>
                </Block>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({})
