import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens to navigate
import Home from "../screens/Home"
import Login from "../screens/Login"
import SignUp from "../screens/Signup"
import ForgetPassword from "../screens/ForgotPassword"
import Testing from "../screens/Testing"
import MainScreen from "../screens/MainScreen/MainScreen"

export default function Main() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    //   headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'green'},
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Plant Apps',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login'
        }}
      />
      <Stack.Screen
        name = "SignUp"
        component = {SignUp}
        options = {{
            title: "Sign Up"
        }}
      />
      <Stack.Screen
        name= "ForgetPassword"
        component={ForgetPassword}
        options = {{
            title: "Forget Password"
        }}
      />
      <Stack.Screen 
        name="Testing"
        component={Testing}
      />
    </Stack.Navigator>
  );
}