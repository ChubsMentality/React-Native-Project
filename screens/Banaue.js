import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const Banaue = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../images/banaue.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.touristSpot}>Banaue Rice Terraces</Text>
                <View style={styles.address}>
                    <Image source={require('../images/pinMarker.png')} style={styles.marker} />
                    <Text style={styles.location}>Batad, Ifugao, Mt. Province, Philippines</Text>
                </View>

                <Text style={styles.overview}>
                    For 2,000 years, the high rice fields of the Ifugao have followed the contours of the mountains. 
                    The fruit of knowledge handed down from one generation to the next, and the expression of sacred traditions
                     and a delicate social balance, they have helped to create a landscape of great beauty that expresses the harmony
                      between humankind and the environment.
                </Text>

                <Text style={styles.facts}>Facts</Text>
                <Text>
                    The rice terraces are situated in the Cordilleras of Luzon island. The remote area—some 220 miles (350 km) from Manila—has
                    long been home to the Ifugao, wet-rice agriculturalists who began building the terraces about the 1st century CE. Despite
                    possessing only basic tools, the Ifugao created an engineering marvel: a vast network of rice terraces sustained by an elaborate
                    irrigation system. According to reports, the terraces—which resemble steps carved into the mountainside—cover some 4,000 square miles
                    (10,360 square km), and their total length is estimated at approximately 12,500 miles (20,100 km), roughly half the Earth’s circumference. 
                    While the rice terraces were important to the Ifugao economy, they also served a cultural function, requiring intensive cooperation among the people.
                </Text>

                <Text style={styles.otherSpotsTxt}>Other Tourist Spots in Batad</Text>
                <ScrollView style={styles.othersContainer} horizontal={true}>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/tappiya.jpeg')} 
                        /> 
                        <Text style={styles.tappiya}>tappiya</Text>
                        <Text style={styles.falls}>falls</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/patpat.jpg')} 
                        />
                        <Text style={styles.sitio}>sitio</Text>
                        <Text style={styles.patpat}>patpat</Text>
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

    tappiya: {
        position: 'absolute',
        top: 40,
        left: 28,
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
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    sitio: {
        position: 'absolute',
        top: 40,
        left: 40,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    patpat: {
        position: 'absolute',
        top: 58,
        left: 33,
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

export default Banaue;

