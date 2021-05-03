import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const ChocoHills = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../images/chocohills.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.touristSpot}>Chocolate Hills</Text>
                <View style={styles.address}>
                    <Image source={require('../images/pinMarker.png')} style={styles.marker} />
                    <Text style={styles.location}>Carmen, Bohol, Philippines</Text>
                </View>

                <Text style={styles.overview}>
                    The Chocolate Hills is a famous tourist attraction of Bohol. They are featured in the provincial flag and seal to symbolize
                    the abundance of natural attractions in the province. They are in the Philippine Tourism Authority's list of tourist destinations in the Philippines; 
                    they have been declared the country's third National Geological Monument and proposed for inclusion in the UNESCO World Heritage List.
                </Text>

                <Text style={styles.facts}>Facts</Text>
                <Text>
                    The Chocolate Hills are a geological formation in Bohol Province, Philippines. There are at least 1,260 hills (and maybe more)
                    spread over an area of more than 50 square kilometres (20 sq mi). They are covered in green grass that turns brown (like chocolate)
                    during the dry season, hence the name.
                </Text>

                <Text style={styles.otherSpotsTxt}>Other Tourist Spots in Bohol</Text>
                <ScrollView style={styles.othersContainer} horizontal={true}>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/panglao.jpg')} 
                        /> 
                        <Text style={styles.panglao}>panglao</Text>
                        <Text style={styles.island}>island</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/loboc.jpg')} 
                        />
                        <Text style={styles.loboc}>loboc</Text>
                        <Text style={styles.river}>river</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/bamboobridge.jpg')} 
                        />
                        <Text style={styles.bamboo}>bamboo</Text>
                        <Text style={styles.hanging}>hanging</Text>
                        <Text style={styles.bridge}>bridge</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/tarsier.jpg')} 
                        />
                        <Text style={styles.tarsier}>tarsier</Text>
                        <Text style={styles.wildlife}>wildlife</Text>
                        <Text style={styles.sanctuary}>sanctuary</Text>
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

    panglao: {
        position: 'absolute',
        top: 40,
        left: 22,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
    },
    island: {
        position: 'absolute',
        top: 58,
        left: 33,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    loboc: {
        position: 'absolute',
        top: 40,
        left: 33,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    river: {
        position: 'absolute',
        top: 58,
        left: 37,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    bamboo: {
        position: 'absolute',
        top: 35,
        left: 27,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    hanging: {
        position: 'absolute',
        top: 50,
        left: 27,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    bridge: {
        position: 'absolute',
        top: 65,
        left: 27,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    tarsier : {
        position: 'absolute',
        top: 35,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },  
    wildlife: {
        position: 'absolute',
        top: 53,
        left: 28,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    sanctuary: {
        position: 'absolute',
        top: 70,
        left: 19,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
});

export default ChocoHills;

