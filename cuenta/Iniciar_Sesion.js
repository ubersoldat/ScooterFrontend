import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Ionicons, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import { CheckBox } from 'react-native-elements';

var colorTextInput = '#D9D9D9';
const { width: WIDTH } = Dimensions.get('window');

import AppNavigator from '../navigation/AppNavigator';

export default class Iniciar_Sesion extends React.Component {

    static navigationOptions = {
        header: null
    }

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

    registrarBtn = () => {
        this.props.navigation.navigate('Registrarse')
    };

    loginBtn = () => {
        this.props.navigation.navigate('InSesion')
    };

    render() {
        return (
            <View style={styles.MainContainer}>

                <ScrollView>

                    <View style={styles.inputTextContainer}>


                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Teléfono'}
                                placeholderTextColor={colorTextInput}
                                underlineColorAndroid='transparent'
                            />
                            <Icon name='phone' color='#464646' size={20} style={styles.inputIconStyle} />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Contraseña'}
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={colorTextInput}
                                underlineColorAndroid='transparent'
                            />
                            <Icon name='lock-open' color='#464646' size={20} style={styles.inputIconStyle} />

                            <TouchableOpacity style={styles.eyeBtnStyle} onPress={this.showPass.bind(this)}>
                                <Icon name={this.state.press == false ? 'eye' : 'eye-with-line'} color='#464646' size={20} />
                            </TouchableOpacity>

                        </View>

                        <View style={styles.inputContainer}>
                            <CheckBox
                                center
                                title='Recordar datos'
                                checked={this.state.checked}
                            />
                        </View>

                    
                        <TouchableOpacity style={styles.loginBtnStyle} onPress={() => this.props.navigation.navigate('AppNavigator')}>
                            <Text style={styles.textBtnStyle}>Iniciar Sesión</Text>
                            
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.inputContainerRegistrarse} onPress={() => this.props.navigation.navigate('Registrarse')}>
                            <Text style={styles.textBtnStyleRegistrarse}>REGISTRARSE</Text>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </View>
        );
    }
}

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

    textContainer: {
        alignItems: 'center',
        backgroundColor: colorTextInput,
        marginTop: 20
    },

    labelStyle: {
        fontSize: 15,
        color: '#000000',
    },

    logoStyle: {
        width: 120,
        height: 76,
    },

    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,
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
        marginTop: 20,
    },

    inputContainerRegistrarse: {
        marginTop: 50,
        color: '#000000'
    },

    inputTextContainer: {
        flex: 13,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 230
    },

    loginBtnStyle: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 5,
        backgroundColor: '#339FFF',
        justifyContent: 'center',
        marginTop: 20,
    },

    textBtnStyle: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',

    },

    textBtnStyleRegistrarse: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',

    },

});



