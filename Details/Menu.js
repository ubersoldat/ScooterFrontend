import React, { Component } from "react";

import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText,
} from "./styles";

import {
  StyleSheet,
  View,
} from 'react-native';



import patinete2 from '../assets/images/patinete2.png';
// import { View } from "native-base";

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //imc: this.props.navigation.state.params.imc ,
      informacion: this.props.navigation.state.params.informacion,
    };

  }

  _getInformacion() {


    if (this.props.navigation.state.params) {
      this.state.informacion = this.props.navigation.state.params.informacion;
      // scaner = "wena";

    } else {
      console.log("se salio");
    }

  }

  render() {
    return (

      this._getInformacion(),

      <View style={styles.container}>
        <Container>
          <TypeTitle>Modelo: {this.state.informacion}</TypeTitle>
          <TypeDescription>Viajes realizados de este scooter</TypeDescription>

          <TypeImage source={patinete2} />
          <TypeTitle>% Bateria</TypeTitle>
          <TypeDescription>Precio para desbloquear $1</TypeDescription>

          <RequestButton onPress={() => { }}>
            <RequestButtonText onPress={() => this.props.navigation.navigate('RecorridoActivos')}>DESBLOQUEAR SCOOTER</RequestButtonText>
          </RequestButton>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#A4A4A4',
  },

})
