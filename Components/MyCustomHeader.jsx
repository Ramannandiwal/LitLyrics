// MyCustomHeader.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LoadingAnimaton from './LoadingAnimation';

const MyCustomHeader = ({ title, onBackPress ,width="0%",loading =false }) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={onBackPress}>
                <Image
                    source={require("../assets/back.png")} // Adjust the path as needed
                    style={[styles.backButton]}
                />
               
            </TouchableOpacity>
            <View style={{marginLeft:20}}>
            {loading ? <LoadingAnimaton width={width}/>: ""} 
            </View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {

         
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAF7EF',
        padding: 10,
        // Optional: for Android shadow effect
    },
    backButton: {
        width: 25, // Set your desired width
        height: 25, // Set your desired height
        marginLeft: 10,
         // Space between button and title
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default MyCustomHeader;
