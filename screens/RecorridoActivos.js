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





import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get("window");

import { KeyboardAvoidingView } from 'react-native';


export default class RecorridoActivos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            informacion: null,
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

            <View style={styles.mainbody}>
                <View style={styles.header}>
                    {/* <FontAwesome5 style={styles.imgprofile} name={"user-circle"} size={80} color="#fff" /> */}
                    <View style={styles.box1}>
                        <Text style={styles.name}>
                            VIAJE EN CURSO
                        </Text>
                    </View>
                    <View style={styles.box2}>
                        <View style={styles.tiempo}>
                            {/* <FontAwesome5 style={styles.imgitem} name={"user-circle"} size={40} color="#000" /> */}
                            {/* <Image style={styles.imgitem} source={require("../assets/images/userName50.png")} /> */}
                            <Text>
                                Tiempo
                            </Text>
                            <Text style={styles.tiempoViaje}>
                                00:05:30
                            </Text>
                        </View>
                        <View style={styles.distancia}>
                            {/* <FontAwesome5 style={styles.imgitem} name={"user-circle"} size={40} color="#000" /> */}
                            {/* <Image style={styles.imgitem} source={require("../assets/images/userName50.png")} /> */}
                            <Text  >
                                Distancia
                            </Text>
                            <Text style={styles.distanciaViaje} >
                                1.5 km
                            </Text>
                        </View>
                    </View>
                    <View style={styles.box3}>
                        <TouchableOpacity style={styles.btnFinRecorrido}>
                            <Text style={styles.labelBtn}>
                                Finalizar recorrido
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <KeyboardAvoidingView style={styles.container} behavior="padding">

                    <View style={styles.body}>

                        <View style={styles.box4}>
                            <View style={styles.namePrecioEstandar}>
                                {/* <FontAwesome5 style={styles.imgitem} name={"user-circle"} size={40} color="#000" /> */}
                                {/* <Image style={styles.imgitem} source={require("../assets/images/userName50.png")} /> */}
                                <Text style={styles.datosBodyIzquierda}>
                                    Precio Estandar
                                </Text>
                            </View>
                            <View style={styles.precioEstandar}>
                                {/* <FontAwesome5 style={styles.imgitem} name={"user-circle"} size={40} color="#000" /> */}
                                {/* <Image style={styles.imgitem} source={require("../assets/images/userName50.png")} /> */}
                                <Text style={styles.datosBodyDerecha}>
                                    $150
                                </Text>
                            </View>
                        </View>

                        <View style={styles.box4}>
                            <View style={styles.namePrecioEstandar}>
                                {/* <FontAwesome5 style={styles.imgitem} name={"user-circle"} size={40} color="#000" /> */}
                                {/* <Image style={styles.imgitem} source={require("../assets/images/userName50.png")} /> */}
                                <Text style={styles.datosBodyIzquierda}>
                                    Distancia recorrida
                                </Text>
                            </View>
                            <View style={styles.precioEstandar}>
                                {/* <FontAwesome5 style={styles.imgitem} name={"user-circle"} size={40} color="#000" /> */}
                                {/* <Image style={styles.imgitem} source={require("../assets/images/userName50.png")} /> */}
                                <Text style={styles.datosBodyDerecha}>
                                    1.5 km
                                </Text>
                            </View>
                        </View>

                        <View style={styles.box4}>
                            <View style={styles.namePrecioEstandar}>
                                {/* <FontAwesome5 style={styles.imgitem} name={"user-circle"} size={40} color="#000" /> */}
                                {/* <Image style={styles.imgitem} source={require("../assets/images/userName50.png")} /> */}
                                <Text style={styles.datosBodyIzquierda}>
                                    Precio
                                </Text>
                            </View>
                            <View style={styles.precioEstandar}>
                                {/* <FontAwesome5 style={styles.imgitem} name={"user-circle"} size={40} color="#000" /> */}
                                {/* <Image style={styles.imgitem} source={require("../assets/images/userName50.png")} /> */}
                                <Text style={styles.datosBodyDerecha}>
                                    $1500
                                </Text>
                            </View>
                        </View>

                        {/* <View style={styles.boton}> */}
                        {/* <TouchableOpacity style={styles.btnGuardar}>
                            <Text style={styles.labelBtn}>
                                Finalizar
                        </Text>
                        </TouchableOpacity> */}
                        {/* </View> */}
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.btnGuardar}>
                            <Text style={styles.labelBtn}>
                                Finalizar
                        </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>


        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    body: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    footer: {
        flex: 0.5,
        backgroundColor: '#FFF',
        borderTopColor: '#e8e8ec',
        borderTopWidth: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    datosBodyIzquierda: {
        fontSize: 18,
    },
    datosBodyDerecha: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    name: {
        color: '#000',
        fontSize: 20,
        marginTop: 12,
        //fontSize: 20,
        //color: '#222',
        fontWeight: 'bold',
    },
    mainbody: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: StatusBar.currentHeight,
    },
    imgprofile: {
        marginTop: 50,
    },
    username: {
        color: 'white',
        fontSize: 16,
        marginTop: 4,
        marginBottom: 30,
    },
    itemprofile: {
        marginTop: 30,
        marginLeft: 20,
        backgroundColor: '#C8F3D1',
    },
    labelitem: {
        marginTop: -45,
        marginLeft: 60,
        fontSize: 18,
        color: 'black'
    },
    sublabelitem: {
        marginTop: 4,
        marginLeft: 60,
        fontSize: 16,
        color: 'black',

    },
    btnGuardar: {
        width: '100%',
        height: 50,
        // marginLeft: 35,
        //marginTop: 70,
        // borderRadius: 5,
        backgroundColor: '#28983C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnFinRecorrido: {
        width: '80%',
        height: 40,
        //marginLeft: 35,
        //marginTop: 70,
        borderRadius: 5,
        backgroundColor: '#28983C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelBtn: {
        color: '#FFF',
        fontSize: 20,
    },
    imgitem: {
        //color: '#FFFFFF',
        //fontSize: 20,
        // fontWeight: 'bold'
    },
    header: {
        height: 200,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#e8e8ec',
        borderBottomWidth: 1,
    },
    boton: {
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    box2: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        //marginBottom: 30,
        backgroundColor: 'red',
        width: '100%',
        justifyContent: 'center',
    },
    box3: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 0.5,
        //marginBottom: 30,
        backgroundColor: '#FFF',
        width: '100%',
        justifyContent: 'center',
    },
    box4: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        //marginBottom: 30,
        backgroundColor: '#FFF',
        width: '100%',
        justifyContent: 'center',
    },
    box1: {
        alignItems: 'center',
        flex: 0.5,
        backgroundColor: '#FFF',
        width: '100%',
    },
    tiempo: {
        width: '50%',
        backgroundColor: '#FFF',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    namePrecioEstandar: {
        width: '50%',
        backgroundColor: '#ECECEC',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: '10%',
    },
    distancia: {
        backgroundColor: '#FFF',
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    precioEstandar: {
        backgroundColor: '#ECECEC',
        width: '50%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: '10%',
    },
    tiempoViaje: {
        color: '#28983C',
        fontWeight: 'bold',
        fontSize: 30,
    },
    distanciaViaje: {
        color: '#28983C',
        fontWeight: 'bold',
        fontSize: 30,
    }

})