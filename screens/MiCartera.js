import React from 'react';
import { Button, View, Text, StatusBar } from 'react-native';


export default class MiCartera extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#64E74A', marginTop: StatusBar.currentHeight }}>
        <Text>MiCarteraScreen</Text>
        {/* <Button
          title="Activar Lector QR"
          onPress={() => this.props.navigation.navigate('Details')}
        /> */}
      </View>
    );
  }
}