import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const Sirao = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../images/sirao.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.touristSpot}>Sirao Flower Garden</Text>
                <View style={styles.address}>
                    <Image source={require('../images/pinMarker.png')} style={styles.marker} />
                    <Text style={styles.location}>Sirao, Cebu, Philippines</Text>
                </View>

                <Text style={styles.overview}>
                    Amsterdam in Netherlands is one of the places most popular for their beautiful flower gardens. Fascinating rows of colorful flowers line up in large and spacious fields. 
                    Variety of flowers like hyacinths, daffodils, and the most famous tulips give an astonishing picture that is very attractive to tourists especially to those who love nature.
                    <br />
                    <br />
                    In Cebu, Philippines, a so-called “Mini Amsterdam” is attracting tourists from all over the country and even foreigners. It is the famous “Sirao Flower cross” located in a
                    mountain barangay just few minutes from JY, Lahug, Cebu City.
                </Text>

                <Text style={styles.otherSpotsTxt}>Other Tourist Spots in Cebu</Text>
                <ScrollView style={styles.othersContainer} horizontal={true}>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/oslob.jpg')} 
                        /> 
                        <Text style={styles.oslob}>oslob</Text>
                        
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/malapascua.jpg')} 
                        />
                        <Text style={styles.malapascua}>malapascua</Text>
                        <Text style={styles.island}>island</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/pescador.jpg')} 
                        />
                        <Text style={styles.pescador}>pescador</Text>
                        <Text style={styles.island}>island</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/magellan.jpg')} 
                        />
                        <Text style={styles.magellan}>magellan's</Text>
                        <Text style={styles.cross}>cross</Text>
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

    oslob: {
        position: 'absolute',
        top: 50,
        left: 35,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
    },

    malapascua: {
        position: 'absolute',
        top: 40,
        left: 7,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
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

    pescador: {
        position: 'absolute',
        top: 40,
        left: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    magellan : {
        position: 'absolute',
        top: 40,
        left: 8,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },  
    cross: {
        position: 'absolute',
        top: 58,
        left: 33,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
});

export default Sirao;

