import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const MinesView = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../images/minesview.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.touristSpot}>Mines View Observation Deck</Text>
                <View style={styles.address}>
                    <Image source={require('../images/pinMarker.png')} style={styles.marker} />
                    <Text style={styles.location}>Mines View, Baguio, Benguet</Text>
                </View>

                <Text style={styles.overview}>
                    Mines View Park is an overlook park on the northeastern outskirts of Baguio in the Philippines. 
                    It is five kilometers away from the Heart of Baguio, passing through the Botanical Garden, 
                    the Mansion House, Wright Park, and the Pacdal Circle.
                </Text>

                <Text style={styles.facts}>Facts</Text>
                <Text>
                    Mines View is one of the oldest and most famous attraction in the City of Pines. 
                    The park got its name from the Benguet mountain range where gold, silver and copper
                    were once quarried. It was a mining area for local diggers before the Americans discovered Baguio City.
                </Text>

                <Text style={styles.otherSpotsTxt}>Other Tourist Spots in Baguio</Text>
                <ScrollView style={styles.othersContainer} horizontal={true}>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/themansion.jpg')} 
                        /> 
                        <Text style={styles.mansionThe}>the</Text>
                        <Text style={styles.mansion}>mansion</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/burnham.jpg')} 
                        />
                        <Text style={styles.burnham}>burnham</Text>
                        <Text style={styles.park}>park</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/wright.jpg')} 
                        />
                        <Text style={styles.wright}>wright</Text>
                        <Text style={styles.park}>park</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/strawberry.jpeg')} 
                        />
                        <Text style={styles.strawberry}>strawberry</Text>
                        <Text style={styles.farm}>farm</Text>
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

    mansionThe: {
        position: 'absolute',
        top: 40,
        left: 45,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
    },
    mansion: {
        position: 'absolute',
        top: 58,
        left: 23,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    burnham: {
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

    wright: {
        position: 'absolute',
        top: 40,
        left: 27,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    strawberry : {
        position: 'absolute',
        top: 40,
        left: 8,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },  
    farm: {
        position: 'absolute',
        top: 58,
        left: 40,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    
});

export default MinesView;

