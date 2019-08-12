import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text, ScrollView, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import Icon from 'react-native-vector-icons/FontAwesome';


const { width: WIDTH } = Dimensions.get('window');
var colorTextInput = '#D9D9D9';

export default class Registrarse extends React.Component {

    // static navigationOptions = {
    //     header: true,
    //     title: 'Registrarse',
    //     headerStyle: {
    //         backgroundColor: '#648a64',
    //     },
    //     headerTitleStyle: {
    //         color: '#FFFFFF'
    //     }
    // }

    constructor() {
        super()
        this.state = {
            showPass: true,
            press: false
        }
    }

    showPass = () => {
        if (!this.state.press) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }

    render() {
        return (
            <View style={styles.MainContainer}>

                <ScrollView>

                    <View style={styles.inputTextContainer}>

                        {/* <View style={styles.header}>

                            <TouchableOpacity 
                                noDefaultStyles={true}
                                onPress={this.loginBtn}
                            >
                                <View style={styles.header_button}>
                                    <Icon name="chevron-left" size={30} color="#FFF" />
                                </View>
                            </TouchableOpacity>
                            
                            
                            <View style={styles.header_item}>
                                <Text style={[styles.header_text, styles.text_center, styles.bold_text]}>REGISTRO</Text>
                            </View>
                           
                        </View> */}

                        <View style={styles.inputContainer}>
                            <Text style={styles.textStyle}>Ingresa tus datos personales para mayor seguridad</Text>
                        </View>

                        <View style={{ width: '80%', height: 1, backgroundColor: '#329BCB', marginTop: 10 }} />


                        <View style={styles.inputContainer}>

                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Telefono'}
                                placeholderTextColor={colorTextInput}
                                underlineColorAndroid='transparent'
                            />
                            <IconAwesome name='phone' color='#464646' size={20} style={styles.inputIconStyle} />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Nombre'}
                                placeholderTextColor={colorTextInput}
                                underlineColorAndroid='transparent'
                            />
                            <IconAwesome name='drivers-license' color='#464646' size={20} style={styles.inputIconStyle} />
                        </View>


                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Apellido'}
                                placeholderTextColor={colorTextInput}
                                underlineColorAndroid='transparent'
                            />
                            <IconAwesome name='drivers-license' color='#464646' size={20} style={styles.inputIconStyle} />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Contraseña'}
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={colorTextInput}
                                underlineColorAndroid='transparent'
                            />
                            <IconEntypo name='lock-open' color='#464646' size={20} style={styles.inputIconStyle} />

                            <TouchableOpacity style={styles.eyeBtnStyle} onPress={this.showPass.bind(this)}>
                                <IconEntypo name={this.state.press == false ? 'eye' : 'eye-with-line'} color='#464646' size={20} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Repetir Contraseña'}
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={colorTextInput}
                                underlineColorAndroid='transparent'
                            />
                            <IconEntypo name='lock-open' color='#464646' size={20} style={styles.inputIconStyle} />

                            <TouchableOpacity style={styles.eyeBtnStyle} onPress={this.showPass.bind(this)}>
                                <IconEntypo name={this.state.press == false ? 'eye' : 'eye-with-line'} color='#464646' size={20} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Fecha de nacimiento'}
                                placeholderTextColor={colorTextInput}
                                underlineColorAndroid='transparent'
                            />
                            <IconEntypo name='phone' color='#464646' size={20} style={styles.inputIconStyle} />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Email'}
                                placeholderTextColor={colorTextInput}
                                underlineColorAndroid='transparent'
                            />
                            <IconEntypo name='email' color='#464646' size={20} style={styles.inputIconStyle} />
                        </View>

                        <TouchableOpacity style={styles.loginBtnStyle} onPress={this.loginBtn}>
                            <Text style={styles.textBtnStyle}>Crear Cuenta</Text>
                        </TouchableOpacity>

                        <View style={{ width: '80%', height: 40, backgroundColor: '#FFFFFF', marginTop: 10 }} />


                    </View>
                </ScrollView>
            </View>
        );
    }
}

Registrarse.navigationOptions = {
    title: 'Registrarse',
    headerStyle: {
        backgroundColor: '#648a64',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: "center",
        flex: 1
    },

};

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputIconStyle: {
        position: 'absolute',
        top: 12,
        left: 34,
    },

    eyeBtnStyle: {
        position: 'absolute',
        top: 12,
        right: 34,
    },


    inputStyle: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 5,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: '#F2F2F2',
        //color: '#464646',
        marginHorizontal: 25,
    },

    inputContainer: {
        marginTop: 30,
    },

    inputTextContainer: {
        flex: 13,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },

    loginBtnStyle: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#339FFF',
        justifyContent: 'center',
        marginTop: 40,
    },

    textBtnStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',

    },

    textStyle: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
    },

    /////////////////////////////////// EL header/////////////////////////////
    header: {
        backgroundColor: '#329BCB',
        flexDirection: 'row',
        padding: 20
    },
    header_item: {
        flex: 1
    },
    header_button: {
        flexDirection: 'row'
    },
    text_center: {
        textAlign: 'center'
    },
    header_text: {
        color: '#fff',
        fontSize: 20
    },
    bold_text: {
        fontWeight: 'bold'
    },

});