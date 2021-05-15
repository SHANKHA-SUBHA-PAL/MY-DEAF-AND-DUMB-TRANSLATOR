import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import TranslatedScreen from './Screens/TranslatedScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContainer/>
    </SafeAreaProvider>  
  );
}

const Switch = createSwitchNavigator({

Home:{
  screen:HomeScreen
},
Translated:{
  screen:TranslatedScreen
}

})

const AppContainer = createAppContainer(Switch)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
