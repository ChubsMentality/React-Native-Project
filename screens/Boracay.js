import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const Boracay = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../images/boracay.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.touristSpot}>Boracay</Text>
                <View style={styles.address}>
                    <Image source={require('../images/pinMarker.png')} style={styles.marker} />
                    <Text style={styles.location}>Malay, Aklan, Philippines</Text>
                </View>

                <Text style={styles.overview}>
                    The island comprises the barangays of Manoc-Manoc, Balabag, and Yapak in the municipality of Malay, in Aklan Province. 
                    In the 2015 census, the three barangays have a total population of 32,267. The island is administered by the Boracay Inter-agency Task Force. 
                    Apart from its white sand beaches, Boracay is also famous for being one of the world's top destinations for relaxation.
                    As of 2013, it was emerging among the top destinations for tranquility and nightlife.
                    <br />
                    <br />
                    Boracay was awarded as the 2012 Best Island in the World by the international travel magazine Travel + Leisure. In 2014, 
                    the maria island was at the top of the "Best Islands in the World" list published by the international magazine Condé Nast Traveler. 
                    In 2016, Boracay headed the magazine's list of "Top 10 destinations to watch".   
                </Text>

                <Text style={styles.facts}>Facts</Text>
                <Text style={styles.fact1}>
                    Boracay has been highly celebrated in the international media as one of the best islands and having one of the best beaches in the world, 
                    including by Travel + Leisure Magazine, CNN, the New York Times Travel, and many others. 
                </Text>
                <Text style={styles.fact2}>
                    The island was first witnessed by Westerners in the 16th century when Spanish explorers came to the Philippines. 
                    (The Philippines gained their independence from the Spanish in 1898 when the U.S. intervened.)
                </Text>

                <Text style={styles.otherSpotsTxt}>Other Tourist Spots in Aklan</Text>
                <ScrollView style={styles.othersContainer} horizontal={true}>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/hinugtan.jpg')} 
                        /> 
                        <Text style={styles.hinugtan}>hinugtan</Text>
                        <Text style={styles.beach}>beach</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/pagatpat.jpg')} 
                        />
                        <Text style={styles.pagatpat}>pagatpat</Text>
                        <Text style={styles.mangrove}>mangrove</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/haciendamaria.jpg')} 
                        />
                        <Text style={styles.hacienda}>hacienda</Text>
                        <Text style={styles.maria}>maria</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/ariel.jpeg')} 
                        />
                        <Text style={styles.ariel}>ariel's</Text>
                        <Text style={styles.point}>point</Text>
                    </View>
                </ScrollView>
            </View>

            <Footer />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    view: {
        height: '100%',
        width: '100%',
    },

    imageContainer: {
        width: '100%',
        height: 230,
        backgroundColor: 'black',
        marginBottom: 20,
    },

    image: {
        height: '100%',
        width: '100%',
    },

    details: {
        paddingLeft: 20,
        paddingRight: 20
    }, 
    
    touristSpot: {
        fontWeight: '700',
        fontSize: 20,
    },

    address: {
        flexDirection: 'row',
        marginTop: 5
    },

    marker: {
        width: 15,
        height: 15,
        marginTop: 3
    },

    location: {
        marginLeft: 5
    },

    overview: {
        marginTop: 25,
        lineHeight: 20
    },
    
    facts: {
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 5
    },

    fact2: {
        marginTop: 20,
    },

    otherSpotsTxt: {
        fontWeight: '700',
        marginTop: 30,
        marginBottom: 15
    },

    othersContainer: {
        flexDirection: 'row',
        marginBottom: 20
    },

    othersImageContainer: {
        height: 120,
        width: 120,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        backgroundColor: '#111111',
        borderRadius: 15
    },

    othersImg: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        opacity: .75
    },

    hinugtan: {
        position: 'absolute',
        top: 40,
        left: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    beach: {
        position: 'absolute',
        top: 58,
        left: 33,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    pagatpat: {
        position: 'absolute',
        top: 40,
        left: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    mangrove: {
        position: 'absolute',
        top: 58,
        left: 15,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    hacienda: {
        position: 'absolute',
        top: 40,
        left: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    maria: {
        position: 'absolute',
        top: 58,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    ariel : {
        position: 'absolute',
        top: 40,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },  
    point: {
        position: 'absolute',
        top: 58,
        left: 33,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
});

export default Boracay;

