import React, {useState} from 'react'
import {Image, View} from "react-native"
import {
    ActivityIndicator, 
    Keyboard, 
    KeyboardAvoidingView,
    StyleSheet
} from "react-native"

import {Button, Block, Input, Text} from "../../../components"
import {theme} from "../../../constants"
import InputValidation from 'react-native-input-validation'
import { SocialIcon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import AwesomeAlert from 'react-native-awesome-alerts';

export default function Signup({navigation}) {
    //define state via hooks
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("")
    const [error] = useState([]);
    const [loading, setLoading] = useState(false);

    ///define alert
    const [alertMatchingPassword, setAlertPassword] = useState(false);
    const showAlertPassword = () => {
        setAlertPassword(true)
    };
    const hideAlertPassword = () => {
        setAlertPassword(false)
    }; 

    const hasErrors = key => (error.includes(key) ? styles.hasError : null);

    const onSubmit = () => {
        const newLogin = {
            username,
            email, 
            password
        }
        //verify the credentials
        if (password.password === retypePassword.retypePassword) {
            console.log("PASSED");
            setLoading(true);
        }  else {
            console.log("FAILED")
            showAlertPassword();
        }
        
    }

    return (
        <>
        <KeyboardAvoidingView style = {styles.login} behavior = "padding"> 
            <Block padding = {[0, theme.sizes.base * 2]}>
                <Text h1 bold style={styles.loginbutton}>
                    Sign Up New Account
                </Text>
                <Block middle style = {{marginTop: 20}}>
                    <TextInput 
                        label = "Username"
                        error = {hasErrors('email')}
                        style = {[styles.input]}
                        onChangeText = {text => setUsername({username: text})}
                        validator = "email"
                        placeholder = "Enter your new username"
                    />
                    <TextInput
                        label = "Email"
                        error = {hasErrors('email')}
                        style = {[styles.input]}
                        onChangeText = {text => setEmail({email: text})}
                        validator = "email"
                        placeholder = "Enter your email address"
                    />
                    <TextInput
                        secureTextEntry = {true}
                        label = "Password"
                        // error 
                        style = {[styles.input]}
                        onChangeText = {text => setPassword({password: text})}
                        placeholder = "Enter your password"
                    />
                    <TextInput
                        secureTextEntry = {true}
                        label = "Re-enter password"
                        // error 
                        style = {[styles.input]}
                        onChangeText = {text => setRetypePassword({retypePassword: text})}
                        placeholder = "Re-enter your password"
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
                                Sign Up
                            </Text>}
                        </Button>
                    </View>
                    <View 
                        style ={{
                            flexDirection:'row', 
                            flexWrap:'wrap',
                            justifyContent: "center",
                            marginBottom: 30
                        }}>
                        <SocialIcon
                        type='twitter'
                        />
                        <SocialIcon
                        type='facebook'
                        />
                        <SocialIcon
                        type='google'
                        />
                    </View>
                    <Button style={{backgroundColor: "transparent", marginTop: -20}}
                        onPress = {() => navigation.navigate("Login")}
                    >
                        <Text gray caption center>
                           Already have an account? 
                           <Text bold style={{color: "blue"}}> Log In</Text>
                        </Text>
                    </Button>
                </Block>
            </Block>
        </KeyboardAvoidingView>
        {/* <AwesomeAlert
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
            }}
            onConfirmPressed={() => {
            hideAlert();
            }}
        /> */}
        {/* <AwesomeAlert
            show={alertMatchingPassword}
            showProgress={false}
            // title="Alert"
            message="Password does not match"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            // showCancelButton={true}
            showConfirmButton={true}
            cancelText="No, cancel"
            confirmText="Re-typing"
            confirmButtonColor="#DD6B55"
            onCancelPressed={() => {
            hideAlertPassword();
            }}
            onConfirmPressed={() => {
            hideAlertPassword();
            }}
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