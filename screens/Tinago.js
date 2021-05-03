import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const Tinago = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../images/tinago.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.touristSpot}>Tinago Falls</Text>
                <View style={styles.address}>
                    <Image source={require('../images/pinMarker.png')} style={styles.marker} />
                    <Text style={styles.location}>Iligan City, Mindanao, Philippines</Text>
                </View>

                <Text style={styles.overview}>
                    Tinago Falls is a waterfall on the Agus River, located in between the town of Linamon and Iligan City, 
                    Lanao del Norte in the northern part of the Philippine falls of Mindanao. It is one of the main tourist attractions of Iligan, 
                    a city known as the City of Majestic Waterfalls.
                </Text>

                <Text style={styles.facts}>Facts</Text>
                <Text>
                    Tinago is a Filipino term meaning "hidden", the falls being hidden in a deep ravine. Trekking to the falls requires approximately 500
                    descending steps called the winding staircase.
                </Text>

                <Text style={styles.otherSpotsTxt}>Other Tourist Spots in Lanao Del Norte</Text>
                <ScrollView style={styles.othersContainer} horizontal={true}>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/mimbalut.jpg')} 
                        /> 
                        <Text style={styles.mimbalut}>mimbalut</Text>
                        <Text style={styles.falls}>falls</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/dodiongan.jpg')} 
                        />
                        <Text style={styles.dodiongan}>dodiongan</Text>
                        <Text style={styles.falls}>falls</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/limunsudan.jpg')} 
                        />
                        <Text style={styles.limunsudan}>limunsudan</Text>
                        <Text style={styles.falls}>falls</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/cathedral.jpg')} 
                        />
                        <Text style={styles.cathedral}>cathedral</Text>
                        <Text style={styles.falls}>falls</Text>
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

    mimbalut: {
        position: 'absolute',
        top: 40,
        left: 15,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
    },
    falls: {
        position: 'absolute',
        top: 58,
        left: 40,
        color:'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    dodiongan: {
        position: 'absolute',
        top: 40,
        left: 13,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    limunsudan: {
        position: 'absolute',
        top: 40,
        left: 5,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    cathedral : {
        position: 'absolute',
        top: 40,
        left: 15,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },  
});

export default Tinago;

