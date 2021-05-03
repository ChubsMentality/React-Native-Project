import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import 'react-native-gesture-handler';
import Footer from './Footer.js';

const Gallery = ({navigation}) => {
    return(
        <ScrollView style={styles.view}>
            <View style={styles.columnContainer}>
                <View style={styles.firstColumn}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/beach.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/island.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/beach1.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/boat1.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/sierra-madre.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/beach-woman.jpg')}
                            style={styles.image} 
                        />
                    </View>
                </View>

                <View style={styles.secondColumn}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/sagada.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/mayon.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/puertoPrincesa.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/banaue.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/dive.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/falls.jpg')}
                            style={styles.image} 
                        />
                    </View>
                </View>

                <View style={styles.thirdColumn}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/palm-tree.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/boat.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/bora.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/bora1.jpg')}
                            style={styles.image} 
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../Gallery/cheer.jpg')}
                            style={styles.image} 
                        />
                    </View>
                </View>
            </View>
            <View></View>
            <Footer />        
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    view: {
        height: '100%',
        width: '100%',
    },

    columnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 5,
        marginBottom: 15
    },

    firstColumn: {
        marginRight: .5
    },

    imageContainer: {
        width: 130,
        height: 130,
        maringTop: 5,
        marginBottom: 3
    },
    
    image: {
        height: '100%',
        width: '100%'
    },

});

export default Gallery;

