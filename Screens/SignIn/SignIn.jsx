import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../Components/CustomButton';
import RadioButton from '../../Components/RadioButton';
import Modal1 from '../../Components/Modal/Modal1';
import Modal2 from '../../Components/Modal/Modal2';
// Make sure to import Modal2

const SignIn = ({ navigation }) => {
    const [username, setUsername] = useState('');
   
    const [password, setPassword] = useState('');
   
    const [showPassword, setShowPassword] = useState(false);
  
    const [rememberMe, setRememberMe] = useState(false);
    
 



    return (
        <SafeAreaView style={{ backgroundColor: '#FAF7EF', flex: 1 }}>
        
              
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                        <View style={{ paddingHorizontal: 10, backgroundColor: '#FAF7EF' }}>
                            {/* Header Section */}
                            <View style={{ marginTop: 80, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: "black", fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>
                                 Hello There 👋
                                </Text>
                              
                            </View>
                            <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 8 }}>
                            Please enter your username/email and password to sign in.
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

                           
                            <View style={styles.checkboxContainer}>
                                <RadioButton
                                    isSelected={rememberMe}
                                    label={"Remember Me"}
                                    onPress={() => setRememberMe(!rememberMe)}
                                />
                            </View>
                            <View >
                            <TouchableOpacity onPress={()=>{navigation.navigate('Email')}}>
                            <Text style={{textAlign:'center',color:'#956F48',textDecorationLine:'underline',fontWeight:"bold",fontSize:20}}>
                            Forget Password?
                            </Text>
                            </TouchableOpacity>
                            </View>
                            <View style={{padding:10,marginTop:40,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <Image
                                style={{width:300,}}
                                 source={require("../../assets/continue.png")}
                                />
                            </View>
                            <View style={{flexDirection:'row', marginTop:40, justifyContent:'space-around' ,alignContent:'center',alignItems:'center'}}>
                                <TouchableOpacity>
                                <Image
                                 source={require("../../assets/fb.png")}

                                />
                                </TouchableOpacity>
                                <TouchableOpacity>

                                <Image style={{width:48,height:48}} source={require("../../assets/Google.png")} />
                                </TouchableOpacity>
                            </View>
                        </View>

                      
                    </ScrollView>
                

                {/* Bottom Buttons */}
                <View style={styles.bottomButtonContainer}>
                    <CustomButton
                        bgcolor={'#BA8B5A'}
                        color={'white'}
                        onclick={() => {}} // Show Modal1 on button click
                        text={"Sign In"}
                        width={'90%'}
                        radius={30}
                    />
                </View>
         
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

export default SignIn;
