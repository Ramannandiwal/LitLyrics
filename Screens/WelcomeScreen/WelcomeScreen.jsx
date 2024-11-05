import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => (
    <SafeAreaView>
        <View style={{ flexDirection: 'column', alignItems: "center", height: '100%' }}>
            <View style={[styles.imageContainer, { flex: 1 }]}>
                <Image
                    style={styles.image}
                    source={require('../../assets/Bookshelf-Design-Ideas_0_1200.jpeg')}
                    resizeMode='cover'
                />
            </View>

            <View style={{ flex: 0.5, marginTop: 18, height: 'auto' }}>
                <Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>
                    Welcome to <Text style={{ color: "#BA8B5A" }}>LitLyrics</Text> 👋
                </Text>
                <Text style={{ textAlign: "center", fontSize: 18, marginTop: 9 }}>
                    The Number One Best Reading Application in this century
                </Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                {/* Button 1: Continue with Google */}
                <TouchableOpacity style={[styles.RoundBorder, styles.googleButton]}
                    activeOpacity={0.7}
                >
                    <Image style={{ width: 25, height: 25 }} source={require("../../assets/Google.png")} />
                    <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: "bold" }}>Continue With Google</Text>
                </TouchableOpacity>

                {/* Button 2: Get Started */}
                <TouchableOpacity style={[styles.RoundBorder, styles.getStartedButton]}
                    activeOpacity={0.7}
                >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Get Started</Text>
                </TouchableOpacity>

                {/* Button 3: I Already Have An Account */}
                <TouchableOpacity onPress={() => navigation.navigate('FormScreen')} style={[styles.RoundBorder, styles.existingAccountButton]}
                    activeOpacity={0.7}
                >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#BA8B5A' }}>I Already Have An Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    imageContainer: {
        height: 350,
        width: '100%',
        overflow: 'hidden', 
    },
    image: {
        height: '100%',
        width: '100%',
    },
    RoundBorder: {
        borderRadius: 30,
        width: '90%',
        padding: 18,
        alignItems: 'center',
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        marginVertical: 12,
    },
    getStartedButton: {
        backgroundColor: "#BA8B5A",
        marginVertical: 12,
    },
    existingAccountButton: {
        backgroundColor: "#EFE3CB",
        marginVertical: 12,
    },
});

export default WelcomeScreen;
