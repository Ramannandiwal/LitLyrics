import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../Components/CustomButton';
import RadioButton from '../../Components/RadioButton';
import Modal1 from '../../Components/Modal/Modal1';
import Modal2 from '../../Components/Modal/Modal2';
// Make sure to import Modal2

const SignUpScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    // Function to handle closing Modal1 and showing Modal2
    const closeModal1 = () => {
        setShowModal1(false);
        setShowModal2(true); // Show Modal2 when Modal1 is closed
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#FAF7EF', flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            >
                <TouchableWithoutFeedback onPress={() => {
                    if (showModal1) {
                        closeModal1();
                    }
                }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                        <View style={{ paddingHorizontal: 10, backgroundColor: '#FAF7EF' }}>
                            {/* Header Section */}
                            <View style={{ marginTop: 80, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: "black", fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>
                                    Create an Account
                                </Text>
                                <Image
                                    style={{ width: 35, height: 35, marginLeft: 10 }}
                                    source={require("../../assets/clipBoard.png")}
                                />
                            </View>
                            <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 8 }}>
                                Enter your username, email, password. If you forget it, then you have to click on forget password.
                            </Text>
                        </View>

                        {/* Input Fields */}
                        <View style={{ padding: 15, marginTop: 20 }}>
                            {/* Username Input */}
                            <TextInput
                                placeholder="Username"
                                value={username}
                                onChangeText={text => setUsername(text)}
                                style={styles.input}
                            />

                            {/* Email Input */}
                            <TextInput
                                placeholder="Email"
                                value={email}
                                onChangeText={text => setEmail(text)}
                                keyboardType="email-address"
                                style={styles.input}
                            />

                            {/* Password Input with Eye Icon */}
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    placeholder="Password"
                                    value={password}
                                    onChangeText={text => setPassword(text)}
                                    secureTextEntry={!showPassword}
                                    style={styles.passwordInput}
                                />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                    <Image
                                        source={showPassword ? require('../../assets/showhide.png') : require('../../assets/showeye.png')}
                                        style={styles.eyeIcon}
                                    />
                                </TouchableOpacity>
                            </View>

                            {/* Confirm Password Input with Eye Icon */}
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChangeText={text => setConfirmPassword(text)}
                                    secureTextEntry={!showConfirmPassword}
                                    style={styles.passwordInput}
                                />
                                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    <Image
                                        source={showConfirmPassword ? require('../../assets/showhide.png') : require('../../assets/showeye.png')}
                                        style={styles.eyeIcon}
                                    />
                                </TouchableOpacity>
                            </View>

                            {/* Remember Me Checkbox */}
                            <View style={styles.checkboxContainer}>
                                <RadioButton
                                    isSelected={rememberMe}
                                    label={"Remember Me"}
                                    onPress={() => setRememberMe(!rememberMe)}
                                />
                            </View>
                        </View>

                        {/* Show Modal1 when Sign Up button is pressed */}
                        {showModal1 && <Modal1 onClose={closeModal1} isVisible={showModal1} next={()=>{
                            
                            setShowModal1(!showModal1)
                            setShowModal2(true)
                        }
                            
                     
                    } />}
                        {showModal2 && <Modal2 
                           heading={"Daily Quote Notification"}
                           message={" Would you like to receive a daily book quote to inspire your day?"}
                           next={()=>{navigation.navigate('SignIn')}}
                        />  }
                    </ScrollView>
                </TouchableWithoutFeedback>

                {/* Bottom Buttons */}
                <View style={styles.bottomButtonContainer}>
                    <CustomButton
                        bgcolor={'#BA8B5A'}
                        color={'white'}
                        onclick={() => setShowModal1(true)} // Show Modal1 on button click
                        text={"Sign Up"}
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
        fontWeight: 'bold',
        fontSize: 15,
        height: 60,
        borderColor: 'gray',
        borderWidth: 2,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
    },
    passwordInput: {
        height: 60,
        flex: 1,
        paddingHorizontal: 10,
    },
    eyeIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    bottomButtonContainer: {
        padding: 10,
        alignItems: 'center',
    },
});

export default SignUpScreen;
