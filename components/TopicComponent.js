import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import {vs, s} from 'react-native-size-matters'

const TopicComponent = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate("Post", {id: props.id})}}>

            <ImageBackground source={{uri: props.image}} resizeMode="cover" style={styles.image}>

                <View style={styles.darkenImage}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </View>

            </ImageBackground>
            
        </TouchableOpacity>
    )
}

export default TopicComponent

const styles = StyleSheet.create({
    container: {
        height: vs(100),
        marginTop: vs(5),
        marginBottom: vs(15),
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
        fontSize: s(20),
        color: 'white',
        fontFamily: 'SemiBold',
    },
    description: {
        fontSize: s(10),
        color: 'white',
        fontFamily: 'Regular',
        textAlign: 'center',
        width: '65%',
    }
})
