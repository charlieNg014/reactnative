import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from "./navigation/MainScreen"
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux'
import store from "./redux/store"
import LoginNavigation from "./navigation/LoginNavigation"


export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <LoginNavigation />
          {/* <MainScreen /> */}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
