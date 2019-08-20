import React from 'react';
import {
    StyleSheet,
    View,
    Platform,
    Dimensions,
    TouchableOpacity,
    Text,
    TextInput,
    ImageBackground,
    Image,
    Animated,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
import { Icon } from 'native-base';

import * as Animatable from 'react-native-animatable';
const { width: WIDTH } = Dimensions.get('window');
import IconEntypo from 'react-native-vector-icons/Entypo';
var colorTextInput = '#D9D9D9';
import { LinearGradient } from 'expo-linear-gradient';

import { KeyboardAvoidingView } from 'react-native';


export default class Register extends React.Component {
    constructor() {
        super()

        this.state = {
            placeholderText: 'Ingrese su número de teléfono',
            placeholderTextEmail: 'Ingrese su correo electronico',
            showPass: true,
            press: false
        }
    }

    componentWillMount() {
        this.loginHeight = new Animated.Value(155)

    }

    showPass = () => {
        if (!this.state.press) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }

    decreaseHeightOfLogin = () => {
        Keyboard.dismiss()
        Animated.timing(this.loginHeight, {
            toValue: 150,
            duration: 500
        }).start()
    }

    render() {

        // const headerBackArrowOpacity = this.loginHeight.interpolate({
        //     inputRange: [150, SCREEN_HEIGHT],
        //     outputRange: [0, 1]
        // })

        return (

            <View style={{ flex: 1 }}>
                {/* '#39C3CE', '#1C919B' */}
                <LinearGradient colors={['#28983C','#247C34']} style={{ flex: 1 }}>
                    <Animated.View
                        style={{
                            position: 'absolute',
                            height: 60, width: 60,
                            top: 35,
                            left: 25,
                            zIndex: 100,
                            //opacity: headerBackArrowOpacity
                        }}
                    >
                        <TouchableOpacity
                            // onPress={() => this.decreaseHeightOfLogin()}
                            onPress={() => this.props.navigation.goBack(null)}
                        >
                            <Icon name="md-arrow-back" style={{ color: 'black' }} />
                        </TouchableOpacity>

                    </Animated.View>
                    <ImageBackground
                        //source={require('../assets/images/fondo.jpg')}
                        style={{ flex: 1 }}
                    >
                        <View style={{
                            flex: 1, justifyContent: 'center',
                            alignItems: 'center',
                            //backgroundColor: 'red',
                            paddingTop: 40

                        }}>
                            <Animatable.View
                                animation="fadeInDown" iterationCount={1}
                                style={{
                                    backgroundColor: 'white',
                                    height: 100, width: 100, alignItems: 'center',
                                    justifyContent: 'center', marginBottom: 30, borderRadius: 50,
                                }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 26,
                                    color: 'black'
                                }}>APP</Text>
                            </Animatable.View>

                            <Animatable.View
                                animation="fadeInDown" iterationCount={1}
                                style={{
                                    //backgroundColor: 'white',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                    color: 'white'
                                }}>Informacion de la cuenta</Text>
                            </Animatable.View>
                        </View>

                        {/** botoom half**/}

                        <KeyboardAvoidingView style={styles.container} behavior="padding">
                            <Animatable.View animation="slideInUp" iterationCount={1}>
                                <Animated.View
                                    style={{
                                        height: this.loginHeight,
                                        //backgroundColor: 'white',
                                        marginBottom: 30,
                                        alignItems: 'center',
                                        //justifyContent: 'flex-start'

                                    }}>

                                    <Animated.View
                                        style={{
                                            paddingHorizontal: 25,
                                        }}>
                                        <View>
                                            <TextInput
                                                style={styles.inputStyle}
                                                placeholder={'Email'}
                                                placeholderTextColor={colorTextInput}
                                                underlineColorAndroid='transparent'
                                                autoCorrect={false}
                                                colorTextInput = {'#464646'}
                                            //secureTextEntry={true}
                                            />
                                            <IconEntypo name='email' color='#464646' size={20} style={styles.inputIconStyle} />
                                        </View>
                                    </Animated.View >

                                    <View style={{ marginTop: 20 }}>
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

                                    <Animated.View
                                        style={{
                                            paddingHorizontal: 25,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            marginTop: 20
                                        }}>
                                        <Image
                                            source={require('../assets/images/chile2.png')}
                                            style={{ height: 24, width: 24, resizeMode: 'contain' }}
                                        />
                                        <Text style={{
                                            fontSize: 20,
                                            paddingHorizontal: 5,
                                            color: '#FFFFFF'
                                        }}>
                                            +56
                                </Text>
                                        <TextInput
                                            keyboardType="numeric"
                                            maxLength={9}
                                            // ref="textInputMobile"
                                            style={{ fontSize: 16, paddingLeft: 5, color: '#ffffff' }}
                                            placeholder={this.state.placeholderText}
                                            //placeholderTextColor={colorTextInputNumero}
                                            underlineColorAndroid="transparent"
                                        />
                                    </Animated.View >

                                </Animated.View>

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>

                                    <View style={{
                                        height: 35,
                                        backgroundColor: 'white',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        //borderTopColor: '#e8e8ec',
                                        //borderTopWidth: 1,
                                        //paddingHorizontal: 25,
                                        marginTop: 10,
                                        flexDirection: 'column',
                                        width: '50%',
                                        left: '25%',
                                        borderRadius: 5,
                                    }}>

                                        <Text
                                            style={{
                                                //color: '#ffffff',
                                                fontWeight: 'bold',
                                                fontSize: 20,
                                            }}>
                                            Crear cuenta
                                </Text>

                                    </View>

                                </TouchableOpacity>
                            </Animatable.View>
                        </KeyboardAvoidingView>
                    </ImageBackground>
                </LinearGradient>
            </View >

        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    eyeBtnStyle: {
        position: 'absolute',
        top: 12,
        right: 34,
    },

    inputIconStyle: {
        position: 'absolute',
        top: 12,
        left: 34,
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

})