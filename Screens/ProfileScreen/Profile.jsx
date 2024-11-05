import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButton from '../../Components/CustomButton';

const ProfileScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
   
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onDateChange = (event, selectedDate) => {
        setShowDatePicker(false); // Close picker after selection
        if (selectedDate) {
            setDob(selectedDate.toLocaleDateString());
        }
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#FAF7EF', flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjusts view when keyboard appears
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // Adjust the offset if necessary
            >
                {/* Main content */}
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                    <View style={{ paddingHorizontal: 10, backgroundColor: '#FAF7EF' }}>
                        {/* Header Section */}
                        <View style={{ marginTop: 80, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: "black", fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>
                                Complete Your Profile
                            </Text>
                            <Image
                                style={{ width: 35, height: 35, marginLeft: 10 }}
                                source={require("../../assets/clipBoard.png")}
                            />
                        </View>
                        <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 8 }}>
                            Don’t worry only you can able to see your personal data. No one can else able to see it.
                        </Text>
                    </View>
                    <View style={{ marginTop: 50, padding: 10, alignContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ width: 150, height: 150, borderRadius: 75 }}
                            source={require('../../assets/profile.jpeg')}
                        />
                        <View style={{ position: 'absolute', bottom: 16, left: '60%' }}>
                            <TouchableOpacity>
                                <Image
                                    style={{ width: 40, height: 40 }}
                                    source={require('../../assets/edit.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Input Fields */}
                    <View style={{ padding: 15, marginTop: 20 }}>
                        {/* Name Input */}
                        <TextInput
                            placeholder="Your name"
                            value={name}
                            onChangeText={text => setName(text)}
                            style={styles.input}
                        />

                        {/* Phone Number Input */}
                        <TextInput
                            placeholder="Your phone number"
                            value={phone}
                            onChangeText={text => setPhone(text)}
                            keyboardType="phone-pad"
                            style={styles.input}
                        />

                        {/* Date of Birth Input with Calendar Icon */}
                        <View style={styles.datePickerContainer}>
                            <TextInput
                                placeholder="Date of Birth"
                                value={dob}
                                onFocus={() => setShowDatePicker(true)}
                                style={styles.dateInput}
                                editable={false} 
                            />
                            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ padding: 10 }}>
                                <Image source={require('../../assets/calendar.png')} style={{ width: 20, height: 20 }} />
                            </TouchableOpacity>
                        </View>
                        {showDatePicker && (
                            <DateTimePicker
                                accentColor='black'
                                mode="date"
                                display="default"
                                value={new Date()}
                                onChange={onDateChange}
                            />
                        )}

                      
                    </View>
                </ScrollView>

                {/* Bottom Buttons */}
                <View style={styles.bottomButtonContainer}>
                    <CustomButton
                        bgcolor={'#BA8B5A'}
                        color={'white'}
                        onclick={() => navigation.navigate('SignUp')}
                        text={"Continue"}
                        width={'90%'}
                        radius={30}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

// Styles
const styles = StyleSheet.create({
    input: {
        fontWeight:'bold',
        fontSize:15,
        height: 60,
        borderColor: 'gray',
        borderWidth: 2,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    datePickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 5,
        marginBottom: 20,
    },
    dateInput: {
        height: 50,
        flex: 1,
        paddingHorizontal: 10,
    },
    bottomButtonContainer: {
        padding: 10,
        alignItems: 'center',
    },
});

export default ProfileScreen;
