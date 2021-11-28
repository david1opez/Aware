import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import {vs, s} from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/core';


const TrendingComponent = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate("Post", {id: props.id})}}>

            <ImageBackground source={{uri: props.image}} resizeMode="cover" style={styles.image}>
                <View style={styles.darkenImage}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.date}>{props.date}</Text>
                </View>
            </ImageBackground>
            
        </TouchableOpacity>
    )
}

export default TrendingComponent

const styles = StyleSheet.create({
    container: {
        height: vs(150),
        width: s(220),
        marginTop: vs(5),
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    darkenImage: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: vs(10),
        width: s(180),
        fontFamily: 'Medium',
        textAlign: 'center',
        color: '#fff',
        position: 'absolute',
        bottom: vs(50),
    },
    date: {
        fontSize: vs(7),
        fontFamily: 'Regular',
        textAlign: 'center',
        color: '#fff',
        position: 'absolute',
        bottom: vs(35),
    }
})
