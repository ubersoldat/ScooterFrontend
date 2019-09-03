import React from 'react';
import {
  TextInput,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';


export default class MiCartera extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     //imc: this.props.navigation.state.params.imc ,
  //     informacion: this.props.navigation.state.params.informacion,
  //   };

  // }
  render() {
    return (
      <View style={styles.mainbody}>
        <View style={styles.box1}>
            <Text>precio plata virtual: $15.000</Text>
        </View>
        <View style={styles.box2}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainbody: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#A8CD29',
    width: '100%',
    justifyContent: 'center',
  },
  box1: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#CD2929',
    width: '90%',
    borderRadius: 5,
  },
})