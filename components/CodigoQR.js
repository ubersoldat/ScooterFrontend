import React from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';

const { width } = Dimensions.get('screen');
const { width: WIDTH } = Dimensions.get('window');

export default class BarcodeScannerExample extends React.Component {

  static navigationOptions = {
    header: null //hide the header bar 
  };

  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const leftTop = {
      borderLeftWidth: 3,
      borderTopWidth: 3,
      borderColor: 'white'
    };
    const leftBottom = {
      borderLeftWidth: 3,
      borderBottomWidth: 3,
      borderColor: 'white'
    };
    const rightTop = {
      borderRightWidth: 3,
      borderTopWidth: 3,
      borderColor: 'white'
    };
    const rightBottom = {
      borderRightWidth: 3,
      borderBottomWidth: 3,
      borderColor: 'white'
    };

    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: '#000' }}>

        <BarCodeScanner onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000', marginTop: 65 }} />

        <View style={styles.precioContainer}>
          <Text style={styles.precioStyle}>Escanear Codigo QR</Text>
        </View>

        <View style={{ ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: width / 2, height: width / 2 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, ...leftTop }} />
              <View style={{ flex: 1 }} />
              <View style={{ flex: 1, ...rightTop }} />
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 1, ...leftBottom }} />
              <View style={{ flex: 1 }} />
              <View style={{ flex: 1, ...rightBottom }} />
            </View>
          </View>
        </View>


        {/* <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={styles.barcodeScanner}
        /> */}
        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
        )}

      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}

//const opacity = "rgba(0, 0, 0, .6)";

const styles = StyleSheet.create({

  precioContainer: {
    marginTop: 25,
  },

  precioStyle: {
    color: '#fff',
    //width: WIDTH - 50,
    fontSize: 30,
    backgroundColor: '#272727',
    //marginHorizontal: 25,
    textAlign: 'center',
  },


});