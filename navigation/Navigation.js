import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import DrawerNavigation from '../screens/DrawerNavigation';
import Register from '../screens/Register';
import CodigoQR from '../components/CodigoQR';
import LoginScreen2 from '../screens/LoginScreen2';

import { StyleSheet, View } from 'react-native';

const RootStack = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    Register: Register,
    DrawerNavigation: DrawerNavigation,
    CodigoQR: CodigoQR,
    LoginScreen2: LoginScreen2,

  },
  {
    initialRouteName: 'LoginScreen',
    
    defaultNavigationOptions: {
      header: null,
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default function Navigation() {

  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});