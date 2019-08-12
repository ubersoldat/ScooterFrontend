import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Iniciar_Sesion from './cuenta/Iniciar_Sesion';
import Registrarse from './cuenta/Registrarse';
//import MainTabNavigator from './navigation/MainTabNavigator';
import AppNavigator from './navigation/AppNavigator';
//import CodigoQR from './screens/CodigoQR'; 
import CodigoQR from './components/CodigoQR';

import { StyleSheet, View } from 'react-native';

const RootStack = createStackNavigator(
  {
    AppNavigator: AppNavigator,
    //tabNavigator: MainTabNavigator,
    Iniciar_Sesion: Iniciar_Sesion,
    Registrarse: Registrarse,
    CodigoQR: CodigoQR,

  },
  {
    initialRouteName: 'Iniciar_Sesion',
    
    defaultNavigationOptions: {
      header: null,
    },
  }
);

const AppContainer = createAppContainer(RootStack);

export default function App() {

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