import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';

const Home = ({navigation}) => {
    return(
        <ScrollView style={styles.fullContainer}>
            <View style={styles.headImageContainer}>
                <ImageBackground
                    source={require('../images/beer-small.jpg')}
                    style={styles.headImage} 
                >
                    <Text style={styles.explore}>EXPLORE THE</Text>
                    <Text style={styles.ph}>PHILIPPINES</Text>
                </ImageBackground>
            </View>

            <Text style={styles.appName}>LAYAG</Text>
            <Text style={styles.description}>We guide you as you explore the wonders of the Philippines.</Text>
            <View style={styles.featuresContainer}>
                <TouchableOpacity style={styles.aboutUs} onPress={() => navigation.navigate('About Us')}>
                    <Text style={styles.aboutUsText}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.aboutUs} onPress={() => navigation.navigate('Gallery')}>
                    <Text style={styles.aboutUsText}>Gallery</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.LuzonContainer}>
                <Text style={styles.provinceText}>Luzon</Text>
            </View>
            <ScrollView style={styles.images} horizontal={true}>
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Mines View Park')}>
                    <Image
                        style={styles.image}
                        source={require('../images/minesview.jpg')} 
                    />
                    <Text style={styles.minesview}>Mines View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Sagada')}>
                    <Image
                        style={styles.image}
                        source={require('../images/sagada.jpg')} 
                    />
                    <Text style={styles.sagada}>sagada</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Vigan')}>
                    <Image
                        style={styles.image}
                        source={require('../images/vigan.jpg')} 
                    />
                    <Text style={styles.vigan}>vigan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Banaue Rice Terraces')}>
                    <Image
                        style={styles.image}
                        source={require('../images/banaue.jpg')} 
                    />
                    <Text style={styles.rice}>Rice</Text>
                    <Text style={styles.terraces}>Terraces</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Mayon Volcano')}>
                    <Image
                        style={styles.image}
                        source={require('../images/mayon.jpg')} 
                    />
                    <Text style={styles.mayon}>mayon</Text>
                    <Text style={styles.volcano}>volcano</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.infoContainer}>
                <Text style={styles.provinceText}>Visayas</Text>
            </View>
            <ScrollView style={styles.images} horizontal={true}>
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Boracay')}>
                    <Image
                        style={styles.image}
                        source={require('../images/boracay.jpg')} 
                    />
                    <Text style={styles.boracay}>boracay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Chocolate Hills')}> 
                    <Image
                        style={styles.image}
                        source={require('../images/chocohills.jpg')} 
                    />
                    <Text style={styles.choco}>Chocolate</Text>
                    <Text style={styles.hills}>Hills</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Salagdoong Beach')}>
                    <Image
                        style={styles.image}
                        source={require('../images/salagdoong.jpg')} 
                    />
                    <Text style={styles.salagdoong}>salagdoong</Text>
                    <Text style={styles.beach}>beach</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Sirao Flower Garden')}>
                    <Image
                        style={styles.image}
                        source={require('../images/sirao.jpg')} 
                    />
                    <Text style={styles.sirao}>sirao</Text>
                    <Text style={styles.flower}>flower</Text>
                    <Text style={styles.garden}>garden</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.infoContainer}>
                <Text style={styles.provinceText}>Mindanao</Text>
            </View>
            <ScrollView style={styles.images} horizontal={true}>
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Camiguin Island')}>
                    <Image
                        style={styles.image}
                        source={require('../images/camiguin.jpg')} 
                    />
                    <Text style={styles.camiguin}>camiguin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Siargao')}>
                    <Image
                        style={styles.image}
                        source={require('../images/siargao.jpg')} 
                    />
                    <Text style={styles.siargao}>siargao</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Mount Apo')}>
                    <Image
                        style={styles.image}
                        source={require('../images/apo.jpg')} 
                    />
                    <Text style={styles.mount}>MOUNT</Text>
                    <Text style={styles.apo}>APO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Tinago Falls')}>
                    <Image
                        style={styles.image}
                        source={require('../images/tinago.jpg')} 
                    />
                    <Text style={styles.tinago}>tinago</Text>
                    <Text style={styles.falls}>falls</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.footerContainer}>
                <Text style={styles.copyright}>© Copyrights reserved 2021.</Text>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({

    fullContainer: {
        width: '100%',
        height: '100%',
    },

    headImageContainer: {
        width: '100%',
        height: 225,
        backgroundColor: '#111111'
    },

    headImage: {
        width: '100%',
        height: '100%',
    },

    explore: { 
        textAlign: 'right',
        color: 'white',
        fontSize: 28,
        marginTop: 70,
        marginRight: 20,
        fontWeight: 'bold',
        opacity: .75
    },

    ph: {
        textAlign: 'right',
        color: 'white',
        fontSize: 28,
        marginTop: 5,
        fontWeight: 'bold',
        letterSpacing: 1.75,
        marginRight: 15,
        opacity: .75
    },

    appName: {
        textAlign: 'center',
        fontSize: 70,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontStyle: 'italic',
        letterSpacing: 5,
        marginTop: 70,
    },

    description: {
        textAlign: 'center'
    },

    featuresContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    aboutUs: {
        width: 80,
        height: 22,
        backgroundColor: '#111111',
        borderRadius: 15,
        marginLeft: 7,
        marginRight: 7,
        marginTop: 15,
        paddingTop: 3.5
    },

    aboutUsText: {
        color: 'white',
        fontFamily: 'Helvetica',
        textAlign: 'center',
        fontSize: 11,
    },

    LuzonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 70
    },

    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40
    },

    provinceText: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 20,  
    },

    viewAllBtn: {
        marginRight: 20,
        backgroundColor: '#111111',
        width: 65,
        height: 20,
        borderRadius: 15,
        paddingTop: 4,
        paddingRight: 2   
    },

    viewAllText: {
        color: 'white',
        fontSize: 11,
        fontFamily: 'sans-serif',
        textAlign: 'center'
    },

    images: {
        marginTop: 10
    },

    imageContainer: {
        height: 170,
        width: 190,
        borderRadius: 12,
        backgroundColor: 'black',
        marginLeft: 7,
        marginRight: 7,
        marginBottom: 10
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
        opacity: .7
    },

    minesview: {
        position: 'absolute',
        top: 75,
        left: 40,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    sagada: {
        position: 'absolute',
        top: 75,
        left: 55,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    vigan: {
        position: 'absolute',
        top: 75,
        left: 70,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    rice: {
        position: 'absolute',
        top: 65,
        left: 70,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },
    terraces: {
        position: 'absolute',
        top: 85,
        left: 45,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    mayon:{
        position: 'absolute',
        top: 65,
        left: 65,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },
    volcano: {
        position: 'absolute',
        top: 85,
        left: 53,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    boracay: {
        position: 'absolute',
        top: 75,
        left: 50,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },
    
    choco: {
        position: 'absolute',
        top: 65,
        left: 40,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },
    hills: {
        position: 'absolute',
        top: 85,
        left: 70,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    salagdoong: {
        position: 'absolute',
        top: 65,
        left: 30,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },
    beach: {
        position: 'absolute',
        top: 85,
        left: 60,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    sirao: {
        position: 'absolute',
        top: 55,
        left: 70,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },
    flower: {
        position: 'absolute',
        top: 75,
        left: 60,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },
    garden:{
        position: 'absolute',
        top: 95,
        left: 60,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    kawasan: {
        position: 'absolute',
        top: 65,
        left: 50,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },
    falls: {    
        position: 'absolute',
        top: 85,
        left: 70,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    enchanted: {
        position: 'absolute',
        top: 65,
        left: 38,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },
    river: {
        position: 'absolute',
        top: 85,
        left: 65,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    camiguin: {
        position: 'absolute',
        top: 75,
        left: 50,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    siargao: {
        position: 'absolute',
        top: 75,
        left: 55,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    mount:{
        position: 'absolute',
        top: 65,
        left: 65,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },
    apo: {
        position: 'absolute',
        top: 85,
        left: 75,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    tinago: {
        position: 'absolute',
        top: 65,
        left: 65,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },
    falls: {
        position: 'absolute',
        top: 85,
        left: 70,
        fontSize: 18,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
        opacity: .95
    },

    footerContainer: {  
        width: '100%',
        height: 70,
        backgroundColor: '#111111',
        marginTop: 70,
    },

    copyright: {
        color: 'white',
        textAlign: 'center',
        opacity: .7,
        marginTop: 26
    },  

});

export default Home;

