import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const Apo = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../images/apo.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.touristSpot}>Mount Apo</Text>
                <View style={styles.address}>
                    <Image source={require('../images/pinMarker.png')} style={styles.marker} />
                    <Text style={styles.location}>Cotabato, Davao Del Sur, Philippines</Text>
                </View>

                <Text style={styles.overview}>
                    Mount Apo, also known locally as Apo Sandawa, is a large solfataric, dormant stratovolcano on the island of Mindanao, Philippines. With an elevation of 2,954 meters (9,692 ft)
                    above sea level, it is the highest-mountain in the Philippine Archipelago and 24th-highest peak of an island on Earth. Located between Davao City and Davao del Sur province in
                    Region XI and Cotabato in Region XII. Mount Apo is most-prominent mountain in the Philippines.
                </Text>

                <Text style={styles.facts}>Facts</Text>
                <Text>
                    The name of Mt. Apo comes from Apo, a title of respect meaning "revered elder" in various languages of the surrounding Lumad tribes. It is the shortened
                    form of the original Manobo and Kalagan name Apo Sandawa, the name of the spirit of the mountain.
                </Text>

                <Text style={styles.otherSpotsTxt}>Other Tourist Spots in Davao</Text>
                <ScrollView style={styles.othersContainer} horizontal={true}>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/samal.jpg')} 
                        /> 
                        <Text style={styles.samal}>samal</Text>
                        <Text style={styles.island}>island</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/crocodile.jpg')} 
                        />
                        <Text style={styles.crocodile}>crocodile</Text>
                        <Text style={styles.park}>park</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/museodabawenyo.jpg')} 
                        />
                        <Text style={styles.museo}>museo</Text>
                        <Text style={styles.dabawenyo}>dabawenyo</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/kadayawan.jpg')} 
                        />
                        <Text style={styles.kadayawan}>kadayawan</Text>
                        <Text style={styles.village}>village</Text>
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
        height: 225,
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

    samal: {
        position: 'absolute',
        top: 40,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
    },
    island: {
        position: 'absolute',
        top: 58,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    crocodile: {
        position: 'absolute',
        top: 40,
        left: 18,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    park: {
        position: 'absolute',
        top: 58,
        left: 40,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    museo: {
        position: 'absolute',
        top: 40,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    dabawenyo: {
        position: 'absolute',
        top: 60,
        left: 10,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    kadayawan : {
        position: 'absolute',
        top: 40,
        left: 8,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },  
    village: {
        position: 'absolute',
        top: 58,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
});

export default Apo;

