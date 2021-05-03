import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const AboutUs = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.paddedView}>
                <Text style={styles.details}>
                    Our team is composed of third year college students from the Technological Institute of the Philippines 
                    taking up the course Information Technology. We made this app as a requirement in our course
                    Mobile Computing to utilize what we've learned the past weeks of the course. Our team made a tourism app
                    that shows different tourist spots located in the Philippines and displays a brief history of the place,
                    facts, and information why it's a must that tourist should visit the place and experience the wonders of the Philippines.
                </Text>

                <Text style={styles.devsTxt}>The Team</Text>
                <ScrollView style={styles.devsContainer} horizontal={true}>
                    <View style={styles.developer}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.devImage}
                                source={require('../devs/kier.jpg')}
                            />
                        </View>
                        <Text style={styles.devName}>Kier Garces</Text>
                        <Text style={styles.role}>Programmer</Text>
                    </View>

                    <View style={styles.developer}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.devImage}
                                source={require('../devs/macrine.png')}
                            />
                        </View>
                        <Text style={styles.devName}>Macrine Manalo</Text>
                        <Text style={styles.role}>Programmer</Text>
                    </View>

                    <View style={styles.developer}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.devImage}
                                source={require('../devs/denver.jpg')}
                            />
                        </View>
                        <Text style={styles.devName}>Denver Mejia</Text>
                        <Text style={styles.role}>Programmer</Text>
                    </View>

                    <View style={styles.developer}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.devImage}
                                source={require('../devs/jericho.jpg')} 
                            />
                        </View>
                        <Text style={styles.devName}>Jericho Salvador</Text>
                        <Text style={styles.role}>Programmer</Text>
                    </View>

                    <View style={styles.developer}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.devImage}
                                source={require('../devs/paolo.jpg')}
                            />
                        </View>
                        <Text style={styles.devName}>Jose Paolo Santos</Text>
                        <Text style={styles.role}>Programmer</Text>
                    </View>

                    <View style={styles.developer}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../devs/adrian.jpg')}
                                style={styles.devImage}
                            />
                        </View>
                        <Text style={styles.devName}>Adrian Pancho Villa</Text>
                        <Text style={styles.role}>Programmer / Leader</Text>
                    </View>
                </ScrollView>

                <View style={styles.Container}>
                    <View style={styles.mapContainer}>
                        <Image
                            style={styles.map}
                            source={require('../images/tip.png')} 
                        />
                    </View>

                    <View style={styles.info}>
                        <View style={styles.location}>
                            <Image
                                source={require('../icons/location.png')}
                                style={styles.icon} 
                            />
                            <Text style={styles.infoTxt}>938 Aurora Boulevard, Cubao, Quezon City</Text>
                        </View>
                        <View style={styles.web}>
                            <Image
                                source={require('../icons/globe.png')}
                                style={styles.icon} 
                            />
                            <Text style={styles.infoTxt}>https://www.tip.edu.ph</Text>
                        </View>
                        <View style={styles.phone}>
                            <Image
                                source={require('../icons/phone.png')}
                                style={styles.icon} 
                            />
                            <Text style={styles.infoTxt}>(02) 8911 0964</Text>
                        </View>
                    </View>
                </View>
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

    paddedView: {
        paddingLeft: 30,
        paddingRight: 30,
    },

    details: {
        marginTop: 35,
        lineHeight: 27,
        fontFamily: 'sans-serif',
    },

    devsTxt: {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 50,
        marginBottom: 12,
        fontFamily: 'sans-serif'
    },

    developer: {
        width: 140,
        height: 140,
        backgroundColor: 'white',
        shadowColor: 'gray',
        shadowOffset: {width: 3, height: 3},
        shadowRadius: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        borderRadius: 10
    },

    imageContainer: {
        width: 70,
        height: 70,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 50,
        backgroundColor: '#111111',
        marginTop: 13
    },

    devImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    },

    devName: {
        fontWeight: '650',
        fontSize: 12,
        fontFamily: 'sans-serif',
        textAlign: 'center',
        marginTop: 12
    },

    role: {
        textAlign: 'center',
        fontFamily: 'sans-serif',
        fontSize: 11,
        fontWeight: '200',
        marginTop: 3,
        color: '#515251'
    },  

    Container: {
        position: 'relative',
        marginBottom: 80
    },

    mapContainer: {
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        height:300,
        width: 325,
    },

    map: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },

    info: {
        width: 300,
        height: 140,
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 15,
        paddingLeft: 20,
        paddingRight: 20,
        top: 270,
        left: 25,
        shadowColor: 'gray',
        shadowOffset: {width: 3, height: 3},
        shadowRadius: 5,
    },
    
    infoTxt: {
        fontSize: 12,
        marginLeft: 5
    },

    location: {
        flexDirection: 'row',
        marginTop: 22
    },
    web: {
        flexDirection: 'row',
        marginTop: 15,
    },
    phone: {
        flexDirection: 'row',
        marginTop: 15,
    },

    icon: {
        width: 20,
        height: 20
    },

});

export default AboutUs;

