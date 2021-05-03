import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight, } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.footerContainer}>
            <View style={styles.first}>
                <Text style={styles.firstHeader}>LAYAG</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.firstText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
                    <Text style={styles.firstText}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Gallery')}>
                    <Text style={styles.firstText}>Gallery</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.second}>
                <Text style={styles.secondHeader}>Tourist Spots</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Mines View Park')}>
                    <Text style={styles.secondText}>Mines View Park</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Banaue Rice Terraces')}>
                    <Text style={styles.secondText}>Banaue Rice Terraces</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Boracay')}>
                    <Text style={styles.secondText}>Boracay</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Siargao')}>
                    <Text style={styles.secondText}>Siargao</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.fourth}>
               <Image style={styles.fourthImage} source={require('../icons/fb.png')} /> 
               <Image style={styles.fourthImage} source={require('../icons/instagram.png')} /> 
               <Image style={styles.fourthImage} source={require('../icons/twitter.png')} /> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: '#111111',
        width: '100%',
        height: 200,
        marginTop: 10,
        flexDirection: 'row',
        fontFamily: 'Helvetica',
        justifyContent: 'space-evenly',
    },

    first: {
        marginTop: 35,
    },

    firstHeader: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
    },

    firstText: {
        color: 'white',
        opacity: .7,
        fontSize: 11,
        marginTop: 5,
        marginBottom: 5
    },

    second: {
        marginTop: 35,
    },

    secondHeader: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
    },

    secondText: {
        color: 'white',
        opacity: .7,
        fontSize: 11,
        marginTop: 5,
        marginBottom: 5
    },

    fourth: {
        marginTop: 27
    },

    fourthImage: {
        width: 24,
        height: 24,
        marginTop: 15,
        marginBottom: 10
    }
});

export default Footer;

