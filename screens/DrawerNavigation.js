import React from 'react';
import { Platform, Dimensions } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './HomeScreen';
import AsistenciaScreen from './AsistenciaScreen';
import PerfilScreen from './PerfilScreen';
import MenuDrawer from '../components/MenuDrawer';
// proximos
import MiCartera from './MiCartera';
// import Historial from './Historial';


const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
    contentComponent: ({navigation}) => {
        return(<MenuDrawer navigation={navigation}/>)
    }
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home:{
            screen : HomeScreen
        },
        Asistencia:{
            screen : AsistenciaScreen
        },
        Perfil:{
            screen : PerfilScreen
        },
        Cartera:{
            screen : MiCartera
        },
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);
