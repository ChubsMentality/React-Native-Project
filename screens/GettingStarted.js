import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';

const GettingStarted = ({navigation}) => {
    return(
        <ImageBackground
            source={require('../images/getStarted.jpg')}
            style={styles.startingImage}
        >
            <Text style={styles.catchphrase}>It's more fun in the</Text>
            <Text style={styles.text}>PHILIPPINES</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btnText}>LET'S GO</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    startingImage: {
        height: '100%',
        width: '100%',
    },
    
    catchphrase: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 250,
        opacity: .85
    },

    text: {
        textAlign: 'center',
        fontSize: 65,
        color: 'white',
        fontWeight: 'bold',
        opacity: .85
    },

    btn: {
        backgroundColor: 'white',
        width: 130,
        height: 40,
        borderRadius: 20,
        position: 'absolute',
        bottom: 130,
        left: 145,
        paddingTop: 9
    },

    btnText: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        opacity: .85
    },

});

export default GettingStarted;

