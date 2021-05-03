import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const Vigan = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    source={require('../images/callecrisologo.jpg')}
                    style={styles.image}
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.touristSpot}>Vigan - Calle Crisologo</Text>
                <View style={styles.address}>
                    <Image source={require('../images/pinMarker.png')} style={styles.marker} />
                    <Text style={styles.location}>Crisologo, Vigan City, Ilocos Sur</Text>
                </View>

                <Text style={styles.overview}>
                    Vigan is a city in the Philippines, on the west coast of Luzon island. It's known for its preserved
                    Spanish colonial and Asian architecture. Calle Crisologo dominates the Mestizo district, with its cobblestone streets, 
                    malecón, horse-drawn carriages and rustic mansions. Near the white baroque Vigan Cathedral are Plaza Salcedo, 
                    offering fountain light shows, and Plaza Burgos, known for its street-food stalls.
                </Text>

                <Text style={styles.facts}>Facts</Text>
                <Text style={styles.fact1}>
                    Unknown to many, before the name Calle Crisologo street, it was called Calle Escolta de Vigan upon the discovery
                     of the town by Juan de Salcedo in 1572. The street served as the commercial hub in the entire Northern Luzon and was
                      established even before the Galleon Trade.
                </Text>
                <Text style={styles.fact2}>
                    Calle Crisologo was also called “Kasanglayan” (place of the Chinese), which was the business center of the foreign migratory
                     traders including Chinese, Spanish, Mexican, Japanese and other European businessmen.
                </Text>
                <Text style={styles.fact3}>
                    In the late 1890s, the Calle de Escolta De Vigan was renamed to Washington Street during the American rule. On September 1, 1901,
                     the Americans had established a civil government in Ilocos Sur with Don Mena Crisologo, a delegate to the Malolos Congress,
                      as the first provincial governor.
                </Text>

                <Text style={styles.otherSpotsTxt}>Other Tourist Spots in Vigan</Text>
                <ScrollView style={styles.othersContainer} horizontal={true}>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/plazasalcedo.jpg')} 
                        /> 
                        <Text style={styles.plaza}>plaza</Text>
                        <Text style={styles.salcedo}>salcedo</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/syquia.jpg')} 
                        />
                        <Text style={styles.syquia}>syquia</Text>
                        <Text style={styles.museum}>museum</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/baluarte.jpg')} 
                        />
                        <Text style={styles.baluarte}>baluarte</Text>
                        <Text style={styles.resort}>resort</Text>
                    </View>
                    <View style={styles.othersImageContainer}>
                        <Image
                            style={styles.othersImg}
                            source={require('../images/vigancathedral.jpg')} 
                        />
                        <Text style={styles.viganCathedral}>vigan</Text>
                        <Text style={styles.cathedral}>cathedral</Text>
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
        height: 230,
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

    fact2: {
        marginTop: 20,
        marginBottom: 20
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

    plaza: {
        position: 'absolute',
        top: 40,
        left: 35,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        letterSpacing: 1,
    },
    salcedo: {
        position: 'absolute',
        top: 58,
        left: 28,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    syquia: {
        position: 'absolute',
        top: 40,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    museum: {
        position: 'absolute',
        top: 58,
        left: 25,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    baluarte: {
        position: 'absolute',
        top: 40,
        left: 23,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    resort: {
        position: 'absolute',
        top: 58,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },

    viganCathedral : {
        position: 'absolute',
        top: 40,
        left: 30,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },  
    cathedral: {
        position: 'absolute',
        top: 58,
        left: 14,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
});

export default Vigan;

