import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const Salagdoong = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../images/salagdoong.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.touristSpot}>Salagdoong Beach</Text>
                <View style={styles.address}>
                    <Image source={require('../images/pinMarker.png')} style={styles.marker} />
                    <Text style={styles.location}>Maria, Siquijor, Philippines</Text>
                </View>

                <Text style={styles.overview}>
                    Salagdoong Beach is a public beach and as such it is a government-owned resort. It can be found in the town of Maria, Siquijor. 
                    It is nestled on the eastern part of the falls. The management of the beach is left under the auspices of the Provincial Tourism Office. 
                </Text>

                <Text style={styles.facts}>Facts</Text>
                <Text>
                The beach itself is not sandy but rather rocky. The sand is made of small rocky formations that a long time ago used to be corals and shells. 
                But don’t worry, the beach is very inviting and the water is perfect for swimming and snorkeling.
                <br />
                <br />
                The main attraction at Salagdoon Beach is the big rock separating the beach in two. Actually, not the rock itself is the most important but the jumping points. 
                People from all around the world come here for a bit of adrenaline. I’ll talk more about cliff jumping below.   
                </Text>

                <Text style={styles.otherSpotsTxt}>Other Tourist Spots in Siquijor</Text>
                <ScrollView style={styles.othersContainer} horizontal={true}>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/cambugahay.jpg')} 
                        /> 
                        <Text style={styles.cambugahay}>cambugahay</Text>
                        <Text style={styles.falls}>falls</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/paliton.jpg')} 
                        />
                        <Text style={styles.paliton}>paliton</Text>
                        <Text style={styles.beach}>beach</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/cantabon.jpg')} 
                        />
                        <Text style={styles.cantabon}>cantabon</Text>
                        <Text style={styles.cave}>cave</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/butterfly.jpg')} 
                        />
                        <Text style={styles.siquijor}>siquijor</Text>
                        <Text style={styles.butterfly}>butterfly</Text>
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

    cambugahay: {
        position: 'absolute',
        top: 40,
        left: 7,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 14,
        letterSpacing: 1,
    },
    falls: {
        position: 'absolute',
        top: 58,
        left: 36,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    paliton: {
        position: 'absolute',
        top: 40,
        left: 27,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    beach: {
        position: 'absolute',
        top: 58,
        left: 33,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    cantabon: {
        position: 'absolute',
        top: 40,
        left: 18,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    cave: {
        position: 'absolute',
        top: 60,
        left: 40,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    
    siquijor : {
        position: 'absolute',
        top: 30,
        left: 25,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },  
    butterfly: {
        position: 'absolute',
        top: 48,
        left: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    sanctuary: {
        position: 'absolute',
        top: 65,
        left: 17,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
});

export default Salagdoong;

