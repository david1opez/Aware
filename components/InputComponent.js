import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { vs, s } from 'react-native-size-matters'

// STYLE VARIBLES
import Colors from '../assets/theme.styles.js';

const InputComponent = (props) => {
    const textStyle = props.color == "red" ? styles.redText : styles.whiteText;
    const inputStyle = props.color == "red" ? styles.redBorder : styles.whiteBorder;

    return (
        <View>
            <Text style={textStyle}>{props.placeholder}</Text>
            <TextInput style={inputStyle} autoCapitalize="none" onChangeText={(value) => props.setValue(value.trim())} />
        </View>
    )
}

export default InputComponent

const styles = StyleSheet.create({
    redText: {
        color: Colors.secondary,
        fontFamily: 'SemiBold',
    },
    whiteText: {
        color: Colors.primary,
        fontFamily: 'SemiBold',
    },
    redBorder: {
        borderColor: Colors.secondary,
        borderWidth: 2,
        paddingVertical: vs(1),
        paddingHorizontal: s(15),
        width: vs(240),
        maxWidth: vs(240),
        marginBottom: vs(15),
    },
    whiteBorder: {
        borderColor: Colors.primary,
        borderWidth: 2,
        paddingVertical: vs(1),
        paddingHorizontal: s(15),
    },
})
