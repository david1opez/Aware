import React from 'react'
import { StyleSheet, View, TextInput, Image } from 'react-native'
import {vs, s} from 'react-native-size-matters'


const SearchbarComponent = (props) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Buscar..." style={styles.input} onChangeText={value => {props.setValue(value)}}/>
            <Image source={require('../assets/icons/search.png')} style={styles.searchIcon}/>
        </View>
    )
}

export default SearchbarComponent

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vs(15),
    },
    input: {
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#000',
        paddingHorizontal: s(15),
        paddingVertical: vs(2),
        paddingBottom: 0,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Medium',
        fontSize: s(11),
        width: s(200),
        marginLeft: s(-10),
    },
    searchIcon: {
        width: s(18),
        height: s(18),
        marginLeft: s(-35),
        marginTop: vs(-2)
    }
})
