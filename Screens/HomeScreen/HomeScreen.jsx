import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Hello This is the HomeScreen Screen
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color:'black',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
