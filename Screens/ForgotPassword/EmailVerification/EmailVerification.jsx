import React, { useState, useRef, useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../Components/CustomButton';

const EmailVerification = ({ route, navigation }) => {
    const { isEmail } = route.params;
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(55); // 55 seconds countdown
    const [focusedIndex, setFocusedIndex] = useState(null); // Track focused input

    const inputRefs = [useRef(), useRef(), useRef(), useRef()];

    // Countdown timer effect
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer(timer - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move focus to the next input field
        if (text && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleResend = () => {
        setTimer(55); // Reset timer
        // Add logic to resend OTP here
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#FAF7EF', flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                <View style={{ paddingHorizontal: 10, backgroundColor: '#FAF7EF' }}>
                    {/* Header Section */}
                    <View style={{ marginTop: 80, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: "black", fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>
                            You’ve Got {isEmail ? "Mail" : "Message"} 
                        </Text>
                        <Image style={{ width: 50, height: 50 }} source={require("../../../assets/emailbox.png")} />
                    </View>
                    <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 8 }}>
                        We have sent the OTP verification code to your {isEmail ? "email address" : "phone number"}. Check your email and enter the code below.
                    </Text>
                </View>

                {/* OTP Input Boxes */}
                <View style={styles.otpContainer}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={inputRefs[index]}
                            style={[
                                styles.otpInput,
                                digit ? styles.otpInputFilled : null,
                                focusedIndex === index ? styles.otpInputFocused : null,
                            ]}
                            keyboardType="number-pad"
                            maxLength={1}
                            onChangeText={(text) => handleChange(text, index)}
                            value={digit}
                            onFocus={() => setFocusedIndex(index)}
                            onBlur={() => setFocusedIndex(null)}
                        />
                    ))}
                </View>

                {/* Resend Section */}
                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity><Text style={{ textAlign: 'center', fontSize: 20 }}>Didn’t receive code?</Text></TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
                        <Text style={{ textAlign: 'center', fontSize: 20, color: timer > 0 ? 'black' : 'gray' }}>
                            You can resend code in {timer > 0 ? `${timer}s` : 'now'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Bottom Button */}
            <View style={styles.bottomButtonContainer}>
                <CustomButton
                    bgcolor={'#BA8B5A'}
                    color={'white'}
                    onclick={() => navigation.navigate('NewPassword')} // Navigate on button click
                    text={"Confirm"}
                    width={'90%'}
                    radius={30}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 30,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 8,
        color: 'black',
    },
    otpInputFilled: {
        borderColor: '#BA8B5A', // Change color when input is filled
    },
    otpInputFocused: {
        backgroundColor: '#FFEDDB', // Highlight background color when focused
    },
    bottomButtonContainer: {
        padding: 10,
        alignItems: 'center',
    },
});

export default EmailVerification;
