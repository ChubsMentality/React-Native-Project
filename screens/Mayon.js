import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const Mayon = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../images/mayon.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.touristSpot}>Mayon Volcano</Text>
                <View style={styles.address}>
                    <Image source={require('../images/pinMarker.png')} style={styles.marker} />
                    <Text style={styles.location}>Albay, Bicol Region, Philippines</Text>
                </View>

                <Text style={styles.overview}>
                    Mayon, also known as Mount Mayon, is an active stratovolcano in the province of Albay in Bicol Region, on the island of Luzon in the Philippines.
                    A popular tourist spot, it is renowned for its "perfect cone" because of its symmetric conical shape, and is regarded as sacred in Philippine mythology.
                    The volcano with its surrounding landscape was declared a national park on July 20, 1938, the first in the nation. It was reclassified as a natural park 
                    and renamed the Mayon Volcano Natural Park in 2000. It is the centerpiece of the Albay Biosphere Reserve, declared by UNESCO in 2016, and is currently being nominated as a World Heritage Site.
                </Text>

                <Text style={styles.facts}>Facts</Text>
                <Text>
                    Mayon is the archetype of a symmetrical stratovolcano and one of the world most active ones. 
                    It has frequent eruptions producing pyroclastic flows, mud flows and ash falls that repeatedly triggered large-scale evacuations. 
                    Mayon's most violent eruption, in 1814, killed more than 1200 people and devastated several towns.
                </Text>

                <Text style={styles.otherSpotsTxt}>Other Tourist Spots in Albay</Text>
                <ScrollView style={styles.othersContainer} horizontal={true}>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/cagsawa.jpg')} 
                        /> 
                        <Text style={styles.cagsawa}>cagsawa</Text>
                        <Text style={styles.ruins}>ruins</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/daraga.jpg')} 
                        />
                        <Text style={styles.daraga}>daraga</Text>
                        <Text style={styles.church}>church</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/quintiday.jpg')} 
                        />
                        <Text style={styles.quintiday}>quintiday</Text>
                        <Text style={styles.hills}>hills</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/pinamuntugan.jpg')} 
                        />
                        <Text style={styles.pinumuntugan}>pinumuntugan</Text>
                        <Text style={styles.island}>island</Text>
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

    cagsawa: {
        position: 'absolute',
        top: 40,
        left: 18,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
    },
    ruins: {
        position: 'absolute',
        top: 58,
        left: 35,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    daraga: {
        position: 'absolute',
        top: 40,
        left: 27,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    church: {
        position: 'absolute',
        top: 58,
        left: 27,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    quintiday: {
        position: 'absolute',
        top: 40,
        left: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    hills: {
        position: 'absolute',
        top: 58,
        left: 40,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    pinumuntugan : {
        position: 'absolute',
        top: 40,
        left: 10,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12,
    },  
    island: {
        position: 'absolute',
        top: 58,
        left: 35,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
});

export default Mayon;

