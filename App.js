import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//navigation screen
import Main from "./navigation/Main"
import MainScreen from "./screens/MainScreen/MainScreen"

export default function App() {
  return (
    <NavigationContainer>
      {/* <Main /> */}
      <MainScreen />
      {/* <DrawerScreen /> */}
    </NavigationContainer>
    
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
