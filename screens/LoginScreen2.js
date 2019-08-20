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
    Keyboard,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
import * as Animatable from 'react-native-animatable';
import { Icon } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import IconEntypo from 'react-native-vector-icons/Entypo';

export default class LoginScreen2 extends React.Component {

    constructor() {
        super()
        //increaseHeightOfLogin()
        this.state = {
            placeholderText: 'Ingrese su número de teléfono',
            placeholderContraseña: 'Ingrese su contraseña',
            showPass: true,
            press: false
        }
    }

    componentWillMount() {
        this.loginHeight = new Animated.Value(150)

        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow',
            this.keyboardWillShow)

        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide',
            this.keyboardWillHide)

        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',
            this.keyboardWillShow)

        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',
            this.keyboardWillHide)

        this.keyboardHeight = new Animated.Value(0)
        this.forwardArrowOpacity = new Animated.Value(0)
        this.borderBottomWidth = new Animated.Value(0)
    }

    keyboardWillShow = (event) => {

        if (Platform.OS == 'android') {
            duration = 100
        } else {
            duration = event.duration
        }

        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: duration + 100,
                toValue: event.endCoordinates.height + 10
            }),
            Animated.timing(this.forwardArrowOpacity, {
                duration: duration,
                toValue: 1
            }),
            Animated.timing(this.borderBottomWidth, {
                duration: duration,
                toValue: 1
            }),
        ]).start()
    }

    keyboardWillHide = (event) => {

        if (Platform.OS == 'android') {
            duration = 100
        } else {
            duration = event.duration
        }

        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: duration + 100,
                toValue: 0
            }),
            Animated.timing(this.forwardArrowOpacity, {
                duration: duration,
                toValue: 0
            }),
            Animated.timing(this.borderBottomWidth, {
                duration: duration,
                toValue: 0
            }),
        ]).start()
    }

    increaseHeightOfLogin = () => {
        //this.setState({ placeholderText: '963199291' })
        Animated.timing(this.loginHeight, {
            toValue: SCREEN_HEIGHT,
            duration: 500
        }).start(() => {
            this.refs.textInputMobile.focus()
        })
    }

    decreaseHeightOfLogin = () => {
        Keyboard.dismiss()
        Animated.timing(this.loginHeight, {
            toValue: 150,
            duration: 500
        }).start()
    }

    showPass = () => {
        if (!this.state.press) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }

    render() {

        const headerTextOpacity = this.loginHeight.interpolate({
            inputRange: [150, SCREEN_HEIGHT],
            outputRange: [1, 0]
        })
        const marginTop = this.loginHeight.interpolate({
            inputRange: [150, SCREEN_HEIGHT],
            outputRange: [25, 100]
        })
        const headerBackArrowOpacity = this.loginHeight.interpolate({
            inputRange: [150, SCREEN_HEIGHT],
            outputRange: [0, 1]
        })
        //////////////////////////////////////
        const titleTextLeft = this.loginHeight.interpolate({
            inputRange: [150, SCREEN_HEIGHT],
            outputRange: [100, 25]
        })
        const titleTextBottom = this.loginHeight.interpolate({
            inputRange: [150, 400, SCREEN_HEIGHT],
            outputRange: [0, 0, 100]
        })
        const titleTextOpacity = this.loginHeight.interpolate({
            inputRange: [150, SCREEN_HEIGHT],
            outputRange: [0, 1]
        })


        return (
            this.increaseHeightOfLogin(),
            <View style={{ flex: 1 }}>

                <Animated.View
                    style={{
                        position: 'absolute',
                        height: 60, width: 60,
                        top: 35,
                        left: 25,
                        zIndex: 100,
                        opacity: headerBackArrowOpacity
                    }}
                >
                    <TouchableOpacity
                        // onPress={() => this.decreaseHeightOfLogin()}
                        onPress={() => this.props.navigation.goBack(null)}
                    >
                        <Icon name="md-arrow-back" style={{ color: 'black' }} />
                    </TouchableOpacity>

                </Animated.View>

                <Animated.View
                    style={{
                        position: 'absolute',
                        height: 60, width: 60,
                        right: 10,
                        bottom: this.keyboardHeight,
                        opacity: this.forwardArrowOpacity,
                        zIndex: 100,
                        backgroundColor: '#54575e',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 30,
                    }}
                >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerNavigation')}>
                        <Icon name="md-arrow-forward" style={{ color: 'white' }} />
                    </TouchableOpacity>

                    {/* <Icon name="md-arrow-forward" style={{ color: 'white' }} /> */}

                </Animated.View>

                {/* <LinearGradient colors={['#F88536','#EC410E' ]} style={{ flex: 1 }}> */}
                <ImageBackground
                    //source={require('../assets/images/fondo.jpg')}
                    style={{ flex: 1 }}
                >
                    <Animatable.View animation="slideInUp" iterationCount={1}>
                        <Animated.View
                            style={{
                                //height: this.loginHeight,
                                backgroundColor: '#FFFFFF',
                                marginTop: 130
                            }}>

                            <View

                            >
                                <Animated.View

                                    style={{
                                        marginTop: marginTop,
                                        paddingHorizontal: 25,
                                        flexDirection: 'row',
                                    }}>

                                    <Animated.Text
                                        style={{
                                            fontSize: 24,
                                            color: 'gray',
                                            position: 'absolute',
                                            bottom: titleTextBottom,
                                            left: titleTextLeft,
                                            opacity: titleTextOpacity,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        Ingrese su contraseña
                                       </Animated.Text>

                                    {/* <Image
                                        source={require('../assets/images/chile2.png')}
                                        style={{ height: 24, width: 24, resizeMode: 'contain' }}
                                    /> */}
                                    <IconEntypo name='lock-open' color='#464646' size={20} style={styles.inputIconStyle} />
                                    <Animated.View
                                        pointerEvents="none"
                                        style={{
                                            flexDirection: 'row',
                                            flex: 1,
                                            borderBottomWidth: this.borderBottomWidth
                                        }}
                                    >

                                        {/* <Text style={{
                                            fontSize: 20,
                                            paddingHorizontal: 10
                                        }}>
                                            +56
                                        </Text> */}

                                        <TextInput
                                            // keyboardType="numeric"
                                            // maxLength={9}
                                            // width= {50}
                                            secureTextEntry={this.state.showPass}
                                            ref="textInputMobile"
                                            style={{ flex: 1, fontSize: 15 }}
                                            placeholder={this.state.placeholderContraseña}
                                            underlineColorAndroid="transparent"
                                            autoCorrect={false}
                                        />

                                    </Animated.View>
                                    <TouchableOpacity onPress={this.showPass.bind(this)}>
                                        <IconEntypo name={this.state.press == false ? 'eye' : 'eye-with-line'} color='#464646' size={20} />
                                    </TouchableOpacity>
                                </Animated.View>
                            </View>

                        </Animated.View>

                    </Animatable.View>
                </ImageBackground>
                {/* </LinearGradient> */}
            </View >
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputIconStyle: {
        // position: 'absolute',
        // top: 10,
        // left: 34,
        paddingHorizontal: 10
    },
})