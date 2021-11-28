import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {vs, s} from 'react-native-size-matters'
import Carousel from 'react-native-snap-carousel';

// COMPONENTS
import NavbarComponent from '../components/NavbarComponent'
import SearchbarComponent from '../components/SearchbarComponent'
import PostComponent from '../components/PostComponent'
import TrendingComponent from '../components/TrendingComponent';
import TopicsScreen from './TopicsScreen'

import Colors from '../assets/theme.styles';

let carouselItems = [
    {
        image: "https://miro.medium.com/max/1250/1*7SaaawwmPO1rycvikMFRvA.jpeg",
        title: "The standard Lorem Ipsum passage, used since the 1500s",
        date: "Nov 27, 2021",
        id: "12345"
    },
    {
        image: "https://miro.medium.com/max/875/1*xv8Z3XCtJ-pNQKaI7avhtA.jpeg",
        title: "The standard Lorem Ipsum passage, used since the 1500s",
        date: "Nov 27, 2021",
        id: "123456"
    },
    {
        image: "https://miro.medium.com/max/2400/1*4auxydTEPlR7F3zDjZS85A.jpeg",
        title: "The standard Lorem Ipsum passage, used since the 1500s",
        date: "Nov 27, 2021",
        id: "1234567"
    },
    {
        image: "https://miro.medium.com/max/1250/1*7SaaawwmPO1rycvikMFRvA.jpeg",
        title: "The standard Lorem Ipsum passage, used since the 1500s",
        date: "Nov 27, 2021",
        id: "12345678"
    },
    {
        image: "https://miro.medium.com/max/875/1*xv8Z3XCtJ-pNQKaI7avhtA.jpeg",
        title: "The standard Lorem Ipsum passage, used since the 1500s",
        date: "Nov 27, 2021",
        id: "123456789"
    },
    {
        image: "https://miro.medium.com/max/2400/1*4auxydTEPlR7F3zDjZS85A.jpeg",
        title: "The standard Lorem Ipsum passage, used since the 1500s",
        date: "Nov 27, 2021",
        id: "1234567890"
    },
    {
        image: "https://miro.medium.com/max/1250/1*7SaaawwmPO1rycvikMFRvA.jpeg",
        title: "The standard Lorem Ipsum passage, used since the 1500s",
        date: "Nov 27, 2021",
        id: "1267"
    },
    {
        image: "https://miro.medium.com/max/875/1*xv8Z3XCtJ-pNQKaI7avhtA.jpeg",
        title: "The standard Lorem Ipsum passage, used since the 1500s",
        date: "Nov 27, 2021",
        id: "12678"
    },
    {
        image: "https://miro.medium.com/max/2400/1*4auxydTEPlR7F3zDjZS85A.jpeg",
        title: "The standard Lorem Ipsum passage, used since the 1500s",
        date: "Nov 27, 2021",
        id: "126789"
    },
];

let posts = [
    {
        topic:"Topic",
        date:"Nov 27, 2021",
        title:"The standard Lorem Ipsum passage, used since the 1500s",
        author:"Sarah Douglass - World Change Co.",
        image:"https://miro.medium.com/max/875/1*vh-7paX9yH4sDh-B1mxpeA.jpeg",
        description:"In this context, bloggers publish over 5.7 million posts every day, according to Internet Live Stats. Every month, 78 million new articles see the light on WordPress alone. And these numbers will continue growing, especially since much of the developing world . . .",
        id:"12345",
    },
    {
        topic:"Topic",
        date:"Nov 27, 2021",
        title:"The standard Lorem Ipsum passage, used since the 1500s",
        author:"Sarah Douglass - World Change Co.",
        image:"https://miro.medium.com/fit/c/250/168/1*0pl17K3apuVWjh6zEPQX3Q.png",
        description:"In this context, bloggers publish over 5.7 million posts every day, according to Internet Live Stats. Every month, 78 million new articles see the light on WordPress alone. And these numbers will continue growing, especially since much of the developing world . . .",
        id:"12345",
    },
    {
        topic:"Topic",
        date:"Nov 27, 2021",
        title:"The standard Lorem Ipsum passage, used since the 1500s",
        author:"Sarah Douglass - World Change Co.",
        image:"https://miro.medium.com/fit/c/250/168/1*pQ8Z-BWpV89jGXqW-cpE4Q.jpeg",
        description:"In this context, bloggers publish over 5.7 million posts every day, according to Internet Live Stats. Every month, 78 million new articles see the light on WordPress alone. And these numbers will continue growing, especially since much of the developing world . . .",
        id:"12345",
    },
];

const HomeScreen = () => {
    const [activeSearch, setActiveSearch] = useState(false);

    return (
        <View style={{backgroundColor: Colors.primary}}>
        {
            activeSearch ?
                <NavbarComponent return={true} searchbar={true} clear={() => {setActiveSearch(false)}}/>
            :
                <NavbarComponent/>
        }
            <View style={styles.bottomBorder} />

            <SearchbarComponent setValue={value => {setActiveSearch(true)}}/>

            {
                !activeSearch ?
                <View style={styles.scrollContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.trendingTitle}>Trending</Text>
                        <Text style={styles.trendingSubtitle}>Las publicaciones más populares</Text>

                        {/* Trending caroussel */}
                        <View style={{alignItems: 'center'}}>
                            <Carousel
                                layout={"default"}
                                data={carouselItems}
                                sliderWidth={s(600)}
                                itemWidth={s(220)}
                                loop={true}
                                autoplay={true}
                                autoplayInterval={5000}
                                renderItem={({item, index}) => {
                                    return (
                                        <TrendingComponent
                                            image={item.image}
                                            title={item.title}
                                            date={item.date}
                                            id={item.id}
                                        />
                                    )
                                }}
                            />

                            <View style={styles.carouselIcon}>
                                <View style={styles.left} />
                                <View style={styles.center} />
                                <View style={styles.right} />
                            </View>

                        </View>

                        <View style={styles.divider}></View>

                        {/* Posts */}
                        {
                            posts.map((post, index) => {
                                return (
                                    <PostComponent
                                        topic={post.topic}
                                        date={post.date}
                                        title={post.title}
                                        author={post.author}
                                        image={post.image}
                                        description={post.description}
                                        id={post.id}
                                        key={index}
                                    />
                                )
                            })
                        }

                    </ScrollView>
                </View>
                :
                <TopicsScreen />
            }

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    bottomBorder: {
        backgroundColor: Colors.tertiary,
        width: '100%',
        height: vs(4),
        marginTop: vs(5)
    },
    scrollContainer: {
        paddingHorizontal: s(20),
        paddingBottom: s(315),
    },
    trendingTitle: {
        fontSize: s(20),
        fontFamily: 'SemiBold',
        color: '#000',
        marginBottom: vs(-6),
        textAlign: 'center',
        marginTop: vs(10)
    },
    trendingSubtitle: {
        fontSize: s(9),
        fontFamily: 'Light',
        color: '#000',
        textAlign: 'center',
    },
    divider: {
        marginTop: vs(30),
        marginBottom: vs(30),
        width: '100%',
        height: vs(2),
        backgroundColor: Colors.secondary,
    },
    carouselIcon: {
        position: 'absolute',
        bottom: vs(15),
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 1,
    },
    left: {
        width: s(4),
        height: s(4),
        borderRadius: s(5),
        backgroundColor: Colors.tertiary,
        marginRight: s(6),
    },
    center: {
        width: s(15),
        height: s(4),
        borderRadius: s(5),
        backgroundColor: "#fff",
        marginRight: s(6),
    },
    right: {
        width: s(4),
        height: s(4),
        borderRadius: s(5),
        backgroundColor: Colors.tertiary,
    },
})
