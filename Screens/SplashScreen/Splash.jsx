import React from 'react';
import { SafeAreaView, Text, StyleSheet, ActivityIndicator, View, Image } from 'react-native';

export default function SplashScreen() {
    const secondaryColor = '#BA8B5A';
    const primaryColor = '#EFE3CB';

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: primaryColor }]}>
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../../assets/litlyrics.png')} 
                    style={styles.logo}
                />
                <Text style={styles.text}>LitLyrics</Text>
            </View>
           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between', // Space between top and bottom items
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: '75%', // Adjust to vertically center the logo with space above
    },
    logo: {
        width: 150, // Scaled width
        height: 150, // Scaled height
        marginBottom: 20,
        borderRadius: 75, // Circular border
    },
    text: {
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
    },
    spinner: {
        marginBottom: 100, // 50px from the bottom of the screen
    },
});
