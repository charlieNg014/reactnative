import React, {useState} from 'react'
import {Image, View} from "react-native"
import {
    ActivityIndicator, 
    Keyboard, 
    KeyboardAvoidingView,
    StyleSheet
} from "react-native"

import {Button, Block, Input, Text} from "../components"
import {theme} from "../constants"
import InputValidation from 'react-native-input-validation'
import { SocialIcon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import AwesomeAlert from 'react-native-awesome-alerts';

export default function ForgetPassword({navigation}) {
    //define state via hooks
    const [email, setEmail] = useState("");
    const [error] = useState([]);
    const [loading, setLoading] = useState(false);

    //define alert 
    const [alert, setAlert] = useState(false);
    const showAlert = () => {
        setAlert(true)
    };
    const hideAlert = () => {
        setAlert(false)
    }; 

    const onSubmit = () => {
        //verify the credentials
        if (email.email !== "") {
            console.log("PASSED");
            setLoading(true);
            showAlert();
        }  else {
            console.log("FAILED")
        }
        
    }

    return (
        <>
        <KeyboardAvoidingView style = {styles.login} behavior = "padding"> 
            <Block padding = {[0, theme.sizes.base * 2]}>
                <Text h1 bold style={styles.loginbutton}>
                    Forgot Password
                </Text>
                <Block middle style = {{marginTop: -80}}>
                    <TextInput
                        label = "Email"
                        style = {[styles.input]}
                        onChangeText = {text => setEmamail({email: text})}
                        validator = "email"
                        placeholder = "Enter your email address"
                    />
                    <View 
                    style = {{
                        marginTop: 30,
                        marginBottom: 20
                    }}>
                        <Button 
                            gradient
                            onPress = {() => onSubmit()}
                        >
                            {loading 
                            ? <ActivityIndicator size = "small" color="#00ff00"/>
                            : <Text bold white center>
                                Reset Password
                            </Text>}
                        </Button>
                    </View>
                </Block>
            </Block>
        </KeyboardAvoidingView>
        {/* <AwesomeAlert
            show={alert}
            showProgress={false}
            title="Successed"
            message="You have reset your password successfully !"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            // showCancelButton={true}
            // showConfirmButton={true}
            cancelText="No, cancel"
            confirmText="Re-enter"
            confirmButtonColor="#DD6B55"
            onCancelPressed={() => {
            hideAlert();
            }}
            onConfirmPressed={() => {
            hideAlert();
            }}
            style = {{justifyContent: "center"}}
        /> */}
        </>
    );
  }

const styles = StyleSheet.create ({
    login: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        borderRadius: 0,
        borderWidth: 0, 
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 30
    }, 
    loginbutton: {
        paddingTop: 40,
        color: "cadetblue",
        fontSize: 30
    },
    hasError: {
        borderBottomColor: theme.colors.accent
    }
})
