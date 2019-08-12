import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    Image,
} from 'react-native';


import codigoQR from '../assets/images/codigoQR.png';


import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';

var colorTextInput = '#000000';
const { width: WIDTH } = Dimensions.get('window');

export default class ScooterScreen extends React.Component {
    render() {
        return (
            <View style={styles.MainContainer}>

                <ScrollView>

                    <View style={styles.inputTextContainer}>

                        <View style={styles.inputContainer}>
                            <Text style={styles.estadoStyle}>Estado (On/Off)</Text>
                        </View>

                        <View style={styles.logoContainer}>
                            <Image source={codigoQR} style={styles.logoStyle} />
                        </View>

                        <TouchableOpacity style={styles.inputContainer} onPress={() => this.props.navigation.navigate('CodigoQR')}>
                            <Text style={styles.inputStyle}>Activar Lector QR</Text>
                        </TouchableOpacity>

                        <View style={{ width: '100%', height: 1, backgroundColor: '#329BCB', marginTop: 20 }} />


                        <View style={styles.inputContainer}>
                            <TextInput
                                editable={false} selectTextOnFocus={false}
                                style={styles.primerTextoFondoIzquierda1}
                                placeholder={'Tiempo'}
                                placeholderTextColor={colorTextInput}
                                underlineColorAndroid='transparent'
                            />

                            <Text style={styles.primerTextoFondoDerecha1}> Distancia </Text>

                        </View>

                        <View style={styles.inputContainer2}>
                            <TextInput
                                editable={false} selectTextOnFocus={false}
                                style={styles.primerTextoFondoIzquierda2}
                                placeholder={'00:15:30'}
                                placeholderTextColor={colorTextInput}
                                underlineColorAndroid='transparent'
                            />

                            <Text style={styles.primerTextoFondoDerecha2}> 1.4 </Text>

                        </View>

                        <View style={styles.precioContainer}>
                            <Text style={styles.precioStyle}>$1.500</Text>
                        </View>

                        <View style={styles.botonContainer}>
                            <TouchableOpacity style={styles.finalizarBtnStyle} onPress={this.loginBtn}>
                                <Text style={styles.textBtnStyle}>Finalizar</Text>
                            </TouchableOpacity>
                        </View>




                    </View>
                </ScrollView>
            </View>
        );
    }
}


ScooterScreen.navigationOptions = {
    title: 'DATOS SCOOTER',
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

///////////////////////////////////////ahora nuevo //////////////
const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputStyle: {
        fontWeight: 'bold',
        color: '#339FFF',
        width: WIDTH - 50,
        fontSize: 18,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
        textAlign: 'center',
    },

    estadoStyle: {
        width: WIDTH - 50,
        fontSize: 18,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
        textAlign: 'center',
    },

    precioStyle: {
        color: 'green',
        width: WIDTH - 50,
        fontSize: 20,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
        textAlign: 'center',
    },

    primerTextoFondoIzquierda1: {
        fontWeight: 'bold',
        width: WIDTH - 55,
        marginBottom: -25,
        fontSize: 16,
        paddingLeft: 40,
        // textAlign: 'left',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
    },

    primerTextoFondoIzquierda2: {
        //fontWeight: 'bold',
        width: WIDTH - 55,
        marginBottom: -25,
        fontSize: 18,
        paddingLeft: 35,
        // textAlign: 'left',
        backgroundColor: '#FFFFFF',
        marginHorizontal: 25,
    },

    primerTextoFondoDerecha2: {
        width: WIDTH - 55,
        marginBottom: 0,
        fontSize: 18,
        paddingLeft: 210,
        // textAlign: 'left',
        //backgroundColor: '#F2F2F2',
        marginHorizontal: 25,
        //position: 'absolute',
    },

    primerTextoFondoDerecha1: {
        fontWeight: 'bold',
        width: WIDTH - 55,
        marginBottom: 0,
        fontSize: 16,
        paddingLeft: 190,
        // textAlign: 'left',
        //backgroundColor: '#F2F2F2',
        marginHorizontal: 25,
        //position: 'absolute',
    },

    textosFondos2: {
        width: WIDTH - 55,
        fontSize: 16,
        paddingLeft: 40,
        // textAlign: 'left',
        backgroundColor: '#F2F2F2',
        marginHorizontal: 25,
    },

    inputContainer: {
        marginTop: 10,
    },

    precioContainer: {
        flex: 3,
        marginTop: 25,
    },

    botonContainer: {
        flex: 3,
        marginTop: 20,
    },

    inputContainer2: {
        marginTop: 5,
    },

    inputTextContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    finalizarBtnStyle: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#339FFF',
        justifyContent: 'center',
        //marginTop: 25,
    },

    textBtnStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',

    },

    logoContainer: {
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 25,
    },


});