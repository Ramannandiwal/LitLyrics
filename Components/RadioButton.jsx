import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const RadioButton = ({ label, isSelected, onPress }) => {
    return (
        <TouchableOpacity style={styles.optionWrapper} onPress={onPress}>
            <View style={styles.outer}>
                {isSelected && <View style={styles.inner} />}
            </View>
            <Text style={styles.optionText}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    optionWrapper: {
        width: '48%', // Adjusting for two items per row
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    outer: {
        height: 25,
        width: 25,
        borderRadius: 12.5,
        borderWidth: 1,
        borderColor: '#555',
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {
        height: 15,
        width: 15,
        borderRadius: 7.5,
        backgroundColor: '#BA8B5A',
    },
    optionText: {
        fontWeight:'bold',
        fontSize: 16,
        color: '#333',
    },
});

export default RadioButton;
