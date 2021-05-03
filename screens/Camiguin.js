import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const Camiguin = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../images/camiguin.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.touristSpot}>Camiguin Island</Text>
                <View style={styles.address}>
                    <Image source={require('../images/pinMarker.png')} style={styles.marker} />
                    <Text style={styles.location}>Camiguin Province, Philippnes</Text>
                </View>

                <Text style={styles.overview}>
                    Camiguin is an island province in the Philippines located in the Bohol Sea, about 10 kilometres (6.2 mi) off the northern coast of Mindanao. 
                    It is geographically part of Region X, the Northern Mindanao Region of the country and formerly a part of Misamis Oriental province.
                </Text>

                <Text style={styles.facts}>Facts</Text>
                <Text>
                    Camiguin is the second-smallest province in the country in both population and land area after Batanes. 
                    The provincial capital is Mambajao, which is also the province's largest municipality in both area and population.
                    <br />
                    <br />
                    The province is famous for its sweet lanzones, to which its annual Lanzones Festival is dedicated and celebrated every third weekend of October.
                </Text>

                <Text style={styles.otherSpotsTxt}>Other Tourist Spots in Camiguin</Text>
                <ScrollView style={styles.othersContainer} horizontal={true}>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/camiguin.jpg')} 
                        /> 
                        <Text style={styles.white}>white</Text>
                        <Text style={styles.island}>island</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/sunkencemetery.jpg')} 
                        />
                        <Text style={styles.sunken}>sunken</Text>
                        <Text style={styles.cemetery}>cemetery</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/tuasan.jpg')} 
                        />
                        <Text style={styles.tuasan}>tuasan</Text>
                        <Text style={styles.falls}>falls</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/burias.jpg')} 
                        />
                        <Text style={styles.burias}>burias</Text>
                        <Text style={styles.shoal}>shoal</Text>
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

    white: {
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

    sunken: {
        position: 'absolute',
        top: 40,
        left: 27,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    cemetery: {
        position: 'absolute',
        top: 58,
        left: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    tuasan: {
        position: 'absolute',
        top: 40,
        left: 27,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    falls: {
        position: 'absolute',
        top: 55,
        left: 27,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    burias : {
        position: 'absolute',
        top: 40,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },  
    shoal: {
        position: 'absolute',
        top: 58,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
});

export default Camiguin;

