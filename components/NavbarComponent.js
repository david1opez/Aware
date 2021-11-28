import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import {vs, s} from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/core';

import Colors from '../assets/theme.styles';


const NavbarComponent = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            {
                props.return ?
                    <TouchableOpacity onPress={() => {
                        if(props.searchbar) {
                            props.clear()
                        }
                        else {
                            navigation.goBack()
                        }
                    }}>
                        <Image source={require('../assets/icons/return.png')} style={styles.return}/>
                    </TouchableOpacity>
                    :
                    <View style={styles.return} />
            }
            <Image source={require('../assets/redLogo.png')} style={styles.logo} />

            <TouchableOpacity style={styles.menuContainer}>
                <View style={styles.top} />
                <View style={styles.bottom} />
            </TouchableOpacity>

        </View>
    )
}

export default NavbarComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: vs(25),
        backgroundColor: Colors.primary,
        borderBottomWidth: vs(6),
        borderBottomColor: Colors.tertiary
    },
    return: {
        width: 30,
        height: 30,
    },
    logo: {
        width: s(110),
        height: s(50),
    },
    menuContainer: {
        width: s(30),
        height: s(30),
        justifyContent: 'center',
    },
    top: {
        width: s(30),
        height: 3.5,
        backgroundColor: Colors.secondary,
        marginBottom: 6,
    },
    bottom: {
        width: s(17),
        height: 3.5,
        alignSelf: 'flex-end',
        backgroundColor: Colors.secondary,
    },
})
