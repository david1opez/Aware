import React, {useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { vs, s } from 'react-native-size-matters'
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";


// STYLE VARIBLES
import Colors from '../assets/theme.styles';

const auth = getAuth();

const ButtonComponent = (props) => {
    const navigation = useNavigation();

    const buttonColor = props.color == "red" ? styles.redButton : styles.whiteButton;
    const buttonStyle = props.style == "bold" ? styles.boldButton : styles.outlineButton;
    const textColor = props.color == "red" && props.style == "bold" ? styles.whiteText : props.color == "red" && props.style == "outline" ? styles.redText : props.color == "white" && props.style == "bold" ? styles.redText : styles.whiteText;
    const textSize = props.size == 1 ? styles.h1Text : props.size == 2 ? styles.h2Text : styles.h3Text; 
    
    const handleLogin = (data) => {
        let email = data.email;
        let password = data.password;

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            navigation.replace("Home")
        })
        .catch(error => {
            //Quitar "Firebase: ", parentesis y parentesis del error.message
            let errorMessage = error.message.replace("Firebase: ", "").replace("(", "").replace(")", "").replace("Error", "ERROR:").replace(".", "")
            alert(errorMessage);
        })

    }


    return (
        <TouchableOpacity style={[buttonColor, buttonStyle]} onPress={() => {
            if(props.type == "login") {
                handleLogin(props.data);
            }
            else {
                navigation.navigate('Register');
            }
        }}>
            <Text style={[textColor, textSize]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    redButton: {
        backgroundColor: Colors.secondary,
        paddingVertical: vs(5),
        paddingBottom: vs(3),
        paddingHorizontal: s(15),
        marginBottom: vs(10),
    },
    outlineButton: {
        backgroundColor: Colors.primary,
        borderWidth: 2,
        borderColor: Colors.secondary,
    },
    whiteText: {
        color: Colors.primary,
        fontFamily: 'SemiBold',
    },
    redText: {
        color: Colors.secondary,
        fontFamily: 'SemiBold',
    },
    h1Text: {
        fontSize: vs(14),
    },
    h2Text: {
        fontSize: vs(12),
    },
})
