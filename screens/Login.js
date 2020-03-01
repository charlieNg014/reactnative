import React, {useState} from 'react'
import {View} from "react-native"
import {
    ActivityIndicator, 
    Keyboard, 
    KeyboardAvoidingView,
    StyleSheet
} from "react-native"

import {Button, Block, Input, Text} from "../components"
import {theme} from "../constants"
import InputValidation from 'react-native-input-validation'
import CheckBox from 'react-native-check-box'
import AwesomeAlert from 'react-native-awesome-alerts';
import { TextInput } from 'react-native-gesture-handler'
import { hide } from 'expo/build/launch/SplashScreen'

//testing data for login 
const VALID_EMAIL = "testing";
const VALID_PASSWORD = "123"


export default function Login({navigation}) {
    //define state via hooks
    let [email, setEmail] = useState(VALID_EMAIL);
    const [password, setPassword] = useState(VALID_PASSWORD);
    const [error] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isCheck, setCheck] = useState(false);

    //define alert for wrong email/password
    const [alert, setAlert] = useState(false);
    const showAlert = () => {
        setAlert(true)
    };
    const hideAlert = () => {
        setAlert(false)
    }; 

    //define alert for empty username or password 
    const [emptyAlert, setEmptyAlert] = useState(false);
    const showEmptyAlert = () => {
        setEmptyAlert(true)
    }
    const hideEmptyAlert = () => {
        setEmptyAlert(false)
    }

    const hasErrors = key => (error.includes(key) ? styles.hasError : null);

    const onSubmit = () => {
        const newLogin = {
            email, 
            password
        }
        //verify the credentials
        if (email.email === VALID_EMAIL && password.password === VALID_PASSWORD) {
            console.log("PASSED");
            navigation.navigate("Products")
        } else if (email.email === undefined || password.password === undefined) {
            console.log("Empty credentials");
            setLoading(true);
            showEmptyAlert();
        } else {
            showAlert();
            setLoading(true);
        }
        
    }

    return (
        <>
        <KeyboardAvoidingView style = {styles.login} behavior = "padding">
            <Block padding = {[0, theme.sizes.base * 2]}>
                <Text h1 bold style={styles.loginbutton}>
                    Welcome back, 
                </Text>
                <Text h6 italic>
                    Sign in to continue
                </Text>
                <Block middle style={{marginTop: -40}}>
                    <TextInput 
                        label = "Email address"
                        error = {hasErrors('email')}
                        style = {[styles.inputUser]}
                        onChangeText = {text => setEmail({email: text})}
                        // validator = "email"
                        placeholder = "Username or email"
                    />
                    <TextInput
                        secureTextEntry = {true}
                        label = "Password"
                        // error 
                        style = {styles.inputPassword}
                        onChangeText = {text => setPassword({password: text})}
                        placeholder = "Password"
                    />
                    <Button style={{
                        backgroundColor: "transparent"
                        
                    }}
                        onPress = {() => navigation.navigate("ForgetPassword")}
                    >
                        <Text gray caption right style = {{
                            textDecorationLine: "underline",
                            marginTop: -20
                        }}>
                            Forgot Your Password ?
                        </Text>
                    </Button>
                    <CheckBox 
                        rightText = {"Remember me and keep me logged in"}
                        style = {{marginBottom: 20}}
                        onClick = {() => {
                            setCheck(!isCheck)
                        }}
                        isChecked = {isCheck}
                    />
                    <Button 
                        gradient
                        onPress = {() => onSubmit()}
                        // onPress ={() => navigation.navigate("MainScreen")}
                    >
                        {loading 
                        ? <ActivityIndicator size = "small" color ="white" />
                        : <Text bold white center>
                            Login
                          </Text>}
                    </Button>
                    <Button style={{backgroundColor: "transparent", marginTop: 20}}
                        onPress = {() => navigation.navigate("SignUp")}
                    >
                        <Text gray caption center>
                           Sign Up new account!
                        </Text>
                    </Button>
                </Block>
            </Block>
        </KeyboardAvoidingView>
        <AwesomeAlert
            show={alert}
            showProgress={false}
            // title="Alert"
            message="Wrong username or password"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            // showCancelButton={true}
            showConfirmButton={true}
            cancelText="No, cancel"
            confirmText="Re-enter"
            confirmButtonColor="#DD6B55"
            onCancelPressed={() => {
            hideAlert();
            setLoading(false)
            }}
            onConfirmPressed={() => {
            hideAlert();
            setLoading(false)
            }}
        />

        {/* empty credentials  */}
        <AwesomeAlert
            show={emptyAlert}
            showProgress={false}
            // title="Alert"
            message="Empty username or password"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            // showCancelButton={true}
            showConfirmButton={true}
            cancelText="No, cancel"
            confirmText="Re-enter"
            confirmButtonColor="#DD6B55"
            onCancelPressed={() => {
            hideEmptyAlert();
            setLoading(false)
            }}
            onConfirmPressed={() => {
            hideEmptyAlert();
            setLoading(false)
            }}
        />
        </>
    );
  }

const styles = StyleSheet.create ({
    login: {
        flex: 1,
        justifyContent: 'center'
    },
    inputUser: {
        borderRadius: 0,
        borderWidth: 0, 
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        fontWeight: "bold",
        marginBottom: 35
    }, 
    inputPassword: {
        borderRadius: 0,
        borderWidth: 0, 
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        fontWeight: "bold"
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