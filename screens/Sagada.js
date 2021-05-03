import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const Sagada = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../images/kiltepan.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.touristSpot}>Sagada - Mt. Kiltepan View</Text>
                <View style={styles.address}>
                    <Image source={require('../images/pinMarker.png')} style={styles.marker} />
                    <Text style={styles.location}>Kiltepan Road, Sagada, Mt. Province, Philippines</Text>
                </View>

                <Text style={styles.overview}>
                    “Where do broken hearts go?” No other than in Kiltepan Peak. This tourist spot is made famous by the
                    movie “That Thing Called Tadhana”. It provides the best vantage point to experience the breathtaking
                    sunrise surrounded by the infamous “sea of clouds”. I accepted the challenge of the landscape and
                    took a life-threatening shot by standing on a piece of a fist-size rock at the edge of a cliff.
                </Text>

                <Text style={styles.facts}>Facts</Text>
                <Text>
                    The highest point of the mountainous province is Kiltepan Peak. From there, you can see the rice terraces
                    that were carved out by the Cordillera Tribe. It’s a wonderful view that gives you the perfect opportunity 
                    to appreciate just how man can mold nature in a way that will benefits both parties. Yes, it’s a stark contrast
                    from the minimal green and brown we see peeking out of concrete sidewalks, but it’s a contrast that’s well worth the trip.
                </Text>

                <Text style={styles.otherSpotsTxt}>Other Tourist Spots in Sagada</Text>
                <ScrollView style={styles.othersContainer} horizontal={true}>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/coffins.jpg')} 
                        /> 
                        <Text style={styles.hanging}>hanging</Text>
                        <Text style={styles.coffins}>coffins</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/kapayaw.jpg')} 
                        />
                        <Text style={styles.kapay_aw}>kapay-aw</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/marlboro.jpg')} 
                        />
                        <Text style={styles.marlboro}>marlboro</Text>
                        <Text style={styles.hills}>hills</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/bomodok.jpg')} 
                        />
                        <Text style={styles.bomod_ok}>bomod-ok</Text>
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
        marginBottom: 5,
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

    hanging: {
        position: 'absolute',
        top: 40,
        left: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
    },
    coffins: {
        position: 'absolute',
        top: 58,
        left: 27,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    kapay_aw: {
        position: 'absolute',
        top: 50,
        left: 18,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    marlboro: {
        position: 'absolute',
        top: 40,
        left: 18,
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

    bomod_ok : {
        position: 'absolute',
        top: 40,
        left: 15,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },  
    falls: {
        position: 'absolute',
        top: 58,
        left: 38,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
});

export default Sagada;

