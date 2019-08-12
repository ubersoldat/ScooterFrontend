import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
} from 'react-native';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';

var colorTextInput = '#D9D9D9';
const { width: WIDTH } = Dimensions.get('window');

export default function PerfilScreen() {
    return (
        <View style={styles.MainContainer}>

            <ScrollView>

                <View style={styles.inputTextContainer}>

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

                    <View style={styles.botonContainer}>
                        <TouchableOpacity style={styles.loginBtnStyle} onPress={this.loginBtn}>
                            <Text style={styles.textBtnStyle}>Guardar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: '80%', height: 40, backgroundColor: '#FFFFFF', marginTop: 5 }} />


                </View>
            </ScrollView>
        </View>
    );
}

PerfilScreen.navigationOptions = {

    title: 'EDITAR PERFIL',
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
        marginHorizontal: 25,
    },

    inputContainer: {
        marginTop: 30,
    },

    botonContainer: {
        flex: 3,
        //marginTop: 20,
        marginTop: 20,
    },

    inputTextContainer: {
        flex: 1,
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

});