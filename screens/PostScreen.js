import React, {useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import {vs, s} from 'react-native-size-matters'
// COMPONENTS
import NavbarComponent from '../components/NavbarComponent'
import ButtonComponent from '../components/ButtonComponent'

import Colors from '../assets/theme.styles';


const PostScreen = () => {
    const [popupActive, setPopupActive] = useState(false);

    return (
        <View style={{backgroundColor: Colors.primary, flex:1}}>

            <NavbarComponent return={true}/>

            {/* Background image that is the whole screen*/}
            <ImageBackground source={{uri: "https://ichef.bbci.co.uk/news/976/cpsprodpb/5E20/production/_117669042_gettyimages-1251922051.jpg"}} style={{width: '100%', height: '100%', zIndex: -1}}>
                <View style={styles.darkBackground}>

                    <View style={styles.postContainer}>

                        <Text style={styles.title}>The standard Lorem Ipsum passage, used since the 1500s</Text>

                        <View style={styles.authorContainer}>
                            <Text style={styles.author}>John Doe - </Text>
                            <TouchableOpacity>
                                <Text style={styles.organization}>World Charity</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.date}>Nov 27, 2021</Text>

                        <Image style={styles.image} source={{uri: "https://ichef.bbci.co.uk/news/976/cpsprodpb/5E20/production/_117669042_gettyimages-1251922051.jpg"}} />

                        <View style={styles.contentContainer}>
                            <ScrollView style={styles.scroll}>
                                <Text style={styles.content}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus porttitor arcu, sit amet finibus sapien sollicitudin in.
                                    Sed in lacus lacus. Cras neque nunc, tincidunt a volutpat ornare, luctus vitae mi. Phasellus sed diam fringilla, porta sapien
                                    sit amet, viverra leo. Duis vehicula arcu magna, nec pharetra nunc volutpat id.In molestie sollicitudin lorem, ac tincidunt
                                    ipsum. Vestibulum eu eros at ligula tempus elementum. Sed semper est placerat massa venenatis dictum. Suspendisse at erat
                                    vulputate, semper ipsum sed, rhoncus turpis. Vestibulum elementum felis ut diam tincidunt, vitae commodo risus hendrerit.
                                    Pellentesque eu condimentum ante. Aliquam sagittis viverra ipsum in lacinia. Maecenas metus ex, bibendum et pulvinar sit amet,
                                    imperdiet ut felis. Sed facilisis tincidunt nulla non faucibus. Praesent porttitor, ante vel tempus facilisis, velit enim
                                    semper justo, id posuere erat lectus porttitor ante. Fusce dignissim lorem sed nunc congue, sit amet maximus nisl auctor. Nunc
                                    rutrum nisl magna, vel semper urna eleifend ac. Integer cursus hendrerit malesuada. Nullam mollis neque nisl, vitae sollicitudin
                                    velit auctor id. Fusce scelerisque non dui faucibus rutrum. Morbi vulputate sem ac sapien varius bibendum. Morbi condimentum
                                    tortor id tempor euismod. Nunc a gravida tellus. Proin semper ultrices quam non posuere. Donec nec erat sem. Ut semper eu
                                    purus nec congue. Duis consequat leo eget massa interdum, ut molestie nisi iaculis. Integer commodo elit et dui posuere, nec
                                    pellentesque lorem pharetra. Vestibulum sapien quam, feugiat vehicula vestibulum non, condimentum vitae massa. Mauris vel dui
                                    eleifend, ullamcorper lacus imperdiet, efficitur purus. Cras lacinia, diam nec mattis vulputate, urna arcu imperdiet lacus, in
                                    lobortis justo ante non arcu. Maecenas sodales lacinia vehicula. Cras ultricies magna mi, non euismod enim hendrerit et. Donec
                                    mollis sagittis aliquam. Vivamus pretium, urna eget maximus blandit, turpis dolor finibus lorem, eget consequat massa lorem eget
                                    tellus. Nam sit amet velit neque. Donec aliquam nec mi sed elementum. Cras efficitur efficitur mi, sed molestie nisl egestas ac.
                                    Pellentesque dapibus volutpat mauris, vitae facilisis urna lobortis sit amet. Pellentesque blandit vel odio at suscipit.
                                    Duis tincidunt odio gravida accumsan consequat. Donec imperdiet porttitor rutrum. Integer tincidunt vitae orci in viverra.
                                    Ut lorem risus, interdum ac ultrices at, iaculis eu ipsum. Nunc nec elit et ex efficitur lobortis et ut sem. Mauris tempor lacus
                                    ipsum, id lobortis purus commodo in. Morbi faucibus iaculis finibus. Quisque sit amet risus urna. Sed egestas rhoncus augue,
                                    vitae rutrum ante dictum vel. In pulvinar ex sit amet ante vehicula, sed malesuada magna mollis.
                                </Text>
                            </ScrollView>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={() => {setPopupActive(true)}}>
                            <Text style={styles.buttonText}>Apoyar la causa!</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </ImageBackground>

            {
                popupActive ?
                <View style={styles.popupDarkBackground}>
                    <View style={styles.popupContainer}>
                        <Text style={styles.popupTitle}>Elige una opción para ayudar</Text>

                        <View style={styles.popupOptionsContainer}>
                            <TouchableOpacity style={styles.popupOption}>
                                <Text style={styles.active}>Donar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.popupOption}>
                                <Text style={styles.inactive}>Ser anftrión</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.question}>¿Qué hace esta organización?</Text>
                        <Text style={styles.answer}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam tempus porttitor arcu, sit amet finibus sapien sollicitudin in.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus porttitor, 
                            sit amet finibus sapien sollicitudin in.
                            Lorem ipsum dolor sit amet, consectetur
                        </Text>

                        <Text style={styles.question}>¿Para qué se utilizan los fondos recaudados?</Text>
                        <Text style={styles.answer}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus porttitor arcu, 
                            sit amet finibus sapien sollicitudin in.
                        </Text>

                        <TextInput style={styles.input} placeholder="$"/>
                        <Text style={styles.instruction}>Escribe una cantidad</Text>

                        <TouchableOpacity style={styles.popupButton}>
                            <Text style={styles.popupButtonText}>Donar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                : null
            }

        </View>
    )
}

export default PostScreen

const styles = StyleSheet.create({
    darkBackground: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        zIndex: 1,
    },
    postContainer: {
        backgroundColor: Colors.primary,
        marginHorizontal: s(25),
        height: vs(550),
        marginTop: s(50),
        padding: s(20),
        paddingVertical: s(30)
    },
    title: {
        fontSize: s(16),
        fontFamily: 'SemiBold',
        color: "#000",
        marginBottom: s(10)
    },
    authorContainer: {
        flexDirection: 'row',
    },
    author: {
        fontSize: vs(10),
        fontFamily: 'Regular',
    },
    organization: {
        fontSize: vs(10),
        fontFamily: 'Medium',
        color: Colors.secondary,
    },
    date: {
        fontSize: vs(8),
        fontFamily: 'Light',
        color: "darkgray",
        marginBottom: s(10)
    },
    image: {
        width: '100%',
        height: vs(150),
        marginBottom: s(20)
    },
    contentContainer: {
        paddingBottom: s(350),
    },
    content: {
        fontSize: vs(9),
        fontFamily: 'Regular',
        color: "#000",
        marginBottom: s(20),
        textAlign: 'justify',
        width: "95%"
    },
    button: {
        backgroundColor: Colors.secondary,
        padding: s(10),
        paddingVertical: s(8),
        marginTop: s(20),
        alignSelf: 'center',
        position: 'absolute',
        bottom: vs(25)
    },
    buttonText: {
        fontSize: vs(10),
        fontFamily: 'SemiBold',
        color: "#fff"
    },
    popupDarkBackground: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        flex: 1,
        zIndex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    popupContainer: {
        backgroundColor: Colors.secondary,
        width: '75%',
        height: '60%',
        alignItems: 'center',
        paddingVertical: s(25),
    },
    popupTitle: {
        fontSize: vs(16),
        fontFamily: 'SemiBold',
        color: Colors.secondary,
        backgroundColor: Colors.primary,
        width: '100%',
        textAlign: 'center',
        paddingVertical: s(5),
        paddingHorizontal: s(50)
    },
    popupOptionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: s(70),
        paddingVertical: s(10),
        alignItems: 'center',
    },
    active: {
        fontSize: vs(11),
        fontFamily: 'SemiBold',
        color: Colors.primary,
        textDecorationLine: 'underline',
    },
    inactive: {
        fontSize: vs(10),
        fontFamily: 'Medium',
        color: 'rgba(255, 255, 255, 0.6)',
    },
    question: {
        fontSize: vs(8),
        fontFamily: 'Medium',
        color: "#fff",
        marginBottom: s(5)
    },
    answer: {
        fontSize: vs(7.5),
        fontFamily: 'Light',
        color: "#fff",
        marginBottom: s(10),
        textAlign: 'center',
        width: "85%"
    },
    popupButton: {
        backgroundColor: Colors.primary,
        padding: s(25),
        paddingVertical: s(5),
        paddingBottom: s(3),
        marginTop: s(20),
        alignSelf: 'center',
    },
    popupButtonText: {
        fontSize: vs(14),
        fontFamily: 'SemiBold',
        color: Colors.secondary,
    },
    input: {
        width: '70%',
        borderColor: Colors.primary,
        borderBottomWidth: 2,
        paddingHorizontal: s(10),
        fontSize: vs(10),
        fontFamily: 'Regular',
        color: "#fff",
        marginTop: s(20),
        fontSize: vs(20),
        fontFamily: 'SemiBold',
        textAlign: 'center',
    },
    instruction: {
        fontSize: vs(8),
        fontFamily: 'Light',
        color: "#fff",
        marginTop: s(5),
        textAlign: 'center',
        width: "85%"
    },
})
