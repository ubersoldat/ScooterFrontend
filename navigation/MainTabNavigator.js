import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon'; //arrgelar
import UserTabBarIcon from '../components/UserTabBarIcon'; //arrgelar
import HomeScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import ScooterScreen from '../screens/ScooterScreen';
import AsistenciaScreen from '../screens/AsistenciaScreen';



const config = Platform.select({
  web: { headerMode: 'none' },
  default: {},
});


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Mapa',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-map${focused ? '' : '-outline'}`
          : 'md-map'
      }
    />
  ),
};

HomeStack.path = '';

const PerfilStack = createStackNavigator(
  {
    Perfil: PerfilScreen,
  },
  config
);

PerfilStack.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

PerfilStack.path = '';

const ScooterStack = createStackNavigator(
  {
    Scooter: ScooterScreen,
  },
  config
);

ScooterStack.navigationOptions = {
  tabBarLabel: 'Scooter',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-bicycle'} />
  ),
};

ScooterStack.path = '';



const AsistenciaStack = createStackNavigator(
  {
    Asistencia: AsistenciaScreen,
  },
  config
);

AsistenciaStack.navigationOptions = {
  tabBarLabel: 'Asistencia',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'md-help-circle-outline' : 'md-help-circle'} />
  ),
};

AsistenciaStack.path = '';


const tabNavigator = createBottomTabNavigator({
  ScooterStack,
  HomeStack,
  PerfilStack,
  //ScooterStack,
  AsistenciaStack,
});

tabNavigator.path = '';

export default tabNavigator;
