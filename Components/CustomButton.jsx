import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CustomButton = ({
    text,
    onclick,
    bgcolor,
    color,
    radius = 10, // default value of 10
    width,
    fontSize =16
}) => (
    <TouchableOpacity 
        onPress={onclick} 
        style={[
            styles.button, 
            { backgroundColor: bgcolor, width: width, borderRadius: radius } // Set borderRadius to radius or 10
        ]}
    >
        <Text style={[styles.text, { color: color ,fontSize:fontSize,fontWeight:'bold'}]}>{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        padding: 10,
    },
    text: {
        fontWeight: 'bold',
        padding: 8,
        
        textAlign: 'center',
    }
});

export default CustomButton;
