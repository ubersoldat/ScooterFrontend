import React from 'react';

import {
  StyleSheet,
  View,
  Platform,

} from 'react-native';

import MapView from 'react-native-maps';

//localisacion

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

var currentLatitude = null;
var currentLongitude = null;

export default class HomeScreen extends React.Component {

  state = {
    location: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});

    currentLatitude = JSON.stringify(location.coords.latitude);
    currentLongitude = JSON.stringify(location.coords.longitude);
    console.log(currentLatitude);
    console.log(currentLongitude);

    this.setState({ location });

  };

  render() {

    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          region={{
            latitude: parseFloat(currentLatitude),
            longitude: parseFloat(currentLongitude),
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
        >
          <MapView.Marker
            coordinate={{

              latitude: parseFloat(currentLatitude),
              longitude: parseFloat(currentLongitude)
            }}
            title={'Mi ubicacion'}
            description={'Mi ubicacion'}
          />

        </MapView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Ubicación',
  headerStyle: {
      backgroundColor: '#329BCB',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: "center",
      flex: 1
  },

};


const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

  },

});