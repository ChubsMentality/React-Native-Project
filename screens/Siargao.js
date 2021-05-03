import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const Siargao = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../images/siargao.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.touristSpot}>Siargao Island</Text>
                <View style={styles.address}>
                    <Image source={require('../images/pinMarker.png')} style={styles.marker} />
                    <Text style={styles.location}>Surigao Del Norte, CARAGA, Philippnes</Text>
                </View>

                <Text style={styles.overview}>
                    Siargao is a tear-drop shaped island in the Philippine Sea situated 196 kilometers southeast of Tacloban. It has a land area of approximately 437 square kilometres
                    (169 sq mi). The east coast is relatively straight with one deep inlet, Port Pilar. The coastline is marked by a succession of reefs, small points and white, sandy beaches. 
                    The neighboring islands and islets have similar landforms.
                    <br />
                    <br />
                    The island is within the jurisdiction of the province of Surigao del Norte and is composed of the municipalities of
                    Burgos, Dapa, Del Carmen, General Luna, San Benito, Pilar, San Isidro, Santa Monica and Socorro.
                </Text>

                <Text style={styles.facts}>Facts</Text>
                <Text>
                    The first recorded sighting by Europeans of Siargao Island was by Spanish navigator Bernardo de la Torre on board
                    of the carrack San Juan de Letrán in 1543 when attempting to return from Sarangani to New Spain. It was charted as 
                    Isla de las Palmas (Palm Island in Spanish).
                </Text>

                <Text style={styles.otherSpotsTxt}>Other Tourist Spots in Siargao</Text>
                <ScrollView style={styles.othersContainer} horizontal={true}>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/c9.png')} 
                        /> 
                        <Text style={styles.c9}>cloud 9</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/naked.jpg')} 
                        />
                        <Text style={styles.Naked}>naked</Text>
                        <Text style={styles.Island}>island</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/sugba.jpg')} 
                        />
                        <Text style={styles.sugba}>sugba</Text>
                        <Text style={styles.lagoon}>lagoon</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/guyam.jpg')} 
                        />
                        <Text style={styles.guyam}>guyam</Text>
                        <Text style={styles.Island}>Island</Text>
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
        height: 250,
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

    c9: {
        position: 'absolute',
        top: 45,
        left: 25,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
    },

    Naked: {
        position: 'absolute',
        top: 45,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
    },

    Island: {
        position: 'absolute',
        top: 62,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    sugba: {
        position: 'absolute',
        top: 45,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    lagoon: {
        position: 'absolute',
        top: 60,
        left: 27,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    guyam : {
        position: 'absolute',
        top: 40,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },  
    Island: {
        position: 'absolute',
        top: 58,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
});

export default Siargao;

