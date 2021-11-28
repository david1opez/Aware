import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {vs, s} from 'react-native-size-matters'

// COMPONENTS
import TopicComponent from '../components/TopicComponent'

import Colors from '../assets/theme.styles';


const topics = [
    {
        title: "LGBTQ+",
        description: "Descripción breve y resumida del contenido que tiende cada tema",
        image: "https://cdn.cfr.org/sites/default/files/styles/full_width_xl/public/image/2021/01/lgbtq.jpg"
    },
    {
        title: "Empleabilidad",
        description: "Descripción breve y resumida del contenido que tiende cada tema",
        image: "https://i1.wp.com/godinterest.com/wp-content/uploads/2019/11/Inline_2843359_4.3.jpg?fit=1024%2C768&ssl=1"
    },
    {
        title: "Equidad de género",
        description: "Descripción breve y resumida del contenido que tiende cada tema",
        image: "https://www.bbva.com/wp-content/uploads/2021/03/igualdad-genero.jpg"
    },
    {
        title: "Educación",
        description: "Descripción breve y resumida del contenido que tiende cada tema",
        image: "https://cdn.tatlerasia.com/asiatatler/i/ph/2018/11/02183043-20170329170227-photosforlandingpage-resized-773x513-2_cover_773x513.jpg"
    },
    {
        title: "Discriminación",
        description: "Descripción breve y resumida del contenido que tiende cada tema",
        image: "https://www.globalsistersreport.org/sites/default/files/styles/facebook_ratio/public/20200305T1103-VATICAN-RELIGIOUS-FREEDOM-603167%20resizse.jpg?itok=hNzoXP4P"
    },
]

const TopicsScreen = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Explorar temas</Text>

            <View style={styles.scrollContainer}>
                <ScrollView>
                    {
                        topics.map((topic, index) => {
                            return (
                                <TopicComponent
                                    key={index}
                                    title={topic.title}
                                    description={topic.description}
                                    image={topic.image}
                                />
                            )
                        })
                    }
                </ScrollView>
            </View>

        </View>
    )
}

export default TopicsScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Colors.primary,
    },
    title: {
        fontSize: vs(15),
        fontFamily: 'SemiBold',
        color: "#000",
        marginTop: s(40),
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    scrollContainer: {
        paddingBottom: s(380),
        backgroundColor: Colors.primary
    },  
})
