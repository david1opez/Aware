import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {vs, s} from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/core';

import Colors from '../assets/theme.styles';


const PostComponent = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.topic}>{props.topic}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>

            <TouchableOpacity onPress={() => {navigation.navigate("Post", {id: props.id})}}>
                <Text style={styles.title}>{props.title}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.author}>{props.author}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate("Post", {id: props.id})}}>
                <Image style={styles.image} source={{uri: props.image}} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {navigation.navigate("Post", {id: props.id})}}>
                <Text style={styles.description}>{props.description}</Text>
            </TouchableOpacity>

            <View style={styles.divider}/>
        </View>
    )
}

export default PostComponent

const styles = StyleSheet.create({
    container: {
        marginBottom: vs(30),
    },
    info: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: "center",
        marginBottom: vs(15),
    },
    topic: {
        fontSize: vs(9),
        color: Colors.secondary,
        fontFamily: 'Medium',
        borderWidth: 2,
        borderColor: Colors.secondary,
        textAlign: 'center',
        lineHeight: vs(12),
        paddingHorizontal: s(8),
        paddingVertical: s(4),
        paddingBottom: s(1),
        marginRight: s(10)
    },
    date: {
        fontSize: vs(9),
        color: "darkgray",
        fontFamily: 'Regular',
        lineHeight: vs(12),
    },
    title: {
        fontSize: vs(12),
        color: "black",
        fontFamily: 'SemiBold',
        lineHeight: vs(16),
        marginBottom: vs(6),
        width: s(270),
    },
    author: {
        fontSize: vs(9.5),
        color: "darkgray",
        fontFamily: 'Regular',
        lineHeight: vs(12),
        marginBottom: vs(10),
        marginLeft: vs(1.5),
    },
    image: {
        width: "97%",
        height: s(200),
        marginBottom: vs(20),
    },
    description: {
        fontSize: vs(9),
        color: "#000",
        fontFamily: 'Regular',
        marginBottom: vs(15),
        marginLeft: vs(1.5),
        textAlign: 'justify',
        width: "95%",
    },
    divider: {
        height: 2.5,
        backgroundColor: Colors.tertiary,
        width: "65%",
        alignSelf: 'center',
    }
})
