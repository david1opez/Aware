import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { vs, s } from 'react-native-size-matters'

// STYLE VARIBLES
import Colors from '../assets/theme.styles.js';

// COMPONENTS
import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent'


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{backgroundColor: Colors.primary, flex: 1}}>

            <Image source={require('../assets/redLogo.png')} style={styles.logo} />

            <View style={styles.container}>
                <Text style={styles.title}>Descubre causas que vale la pena apoyar</Text>

                <InputComponent placeholder="Correo :" color="red" setValue={value => {setEmail(value)}}/>
                <InputComponent placeholder="Contraseña :" color="red" setValue={value => {setPassword(value)}}/>

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>

                <ButtonComponent title="Iniciar Sesión" style="bold" color="red" size={1} type="login" data={{email: email, password: password}}/>
                <ButtonComponent title="Registrarse" style="outline" color="red" size={2} type="register"/>
            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    logo: {
        width: vs(110),
        height: vs(110),
        resizeMode: 'contain',
        marginLeft: s(20),
        marginBottom: s(70)
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Bold',
        fontSize: vs(20),
        textAlign: 'center',
        width: s(250),
        color: Colors.secondary,
        marginBottom: vs(20),
    },
    forgotPassword: {
        fontFamily: 'Medium',
        fontSize: vs(9),
        color: Colors.secondary,
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginBottom: vs(20),
    }
})
