import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { create } from 'react-test-renderer';
import HomeScreen from './src/pages/Home';
import IntroSlider from './src/pages/IntroSlider';
import Login from './src/pages/Login';
import SplashScreen from 'react-native-splash-screen';
import VerifyPhone from './src/pages/VerifyPhone';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { BotNav } from './src/components/BotNav';

export default function App() {
  const stack = createStackNavigator();
  const drawer = createDrawerNavigator();
  return (
    // <View>
    //   <HomeScreen/>
    // </View>
    <NavigationContainer>
      <drawer.Navigator initialRouteName="HomeScreen">
        <drawer.Screen name="Home" component={BotNav}/> 
      </drawer.Navigator>
    </NavigationContainer>
    );
}
