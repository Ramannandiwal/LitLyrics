import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../Components/CustomButton';
import RadioButton from '../../../Components/RadioButton';

// Make sure to import Modal2

const Email = ({ navigation }) => {
    const [number, SetNumber] = useState('');
   
    const [email, setEmail] = useState('');
    const [boolEmail,setBoolEmail]=useState(true);
    
    
 



    return (
        <SafeAreaView style={{ backgroundColor: '#FAF7EF', flex: 1 }}>
        
              
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                        <View style={{ paddingHorizontal: 10, backgroundColor: '#FAF7EF' }}>
                            {/* Header Section */}
                            <View style={{ marginTop: 80, flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: "black", fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>
                                Forget Password 🗝️
                                </Text>
                              
                            </View>
                            <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 8 }}>
                            Please enter your {boolEmail ? "Email":"Phone Number"} or We will send an OTP verification code in the next step.
                            </Text>
                        </View>

                        {/* Input Fields */}
                        <View style={{ padding: 15, marginTop: 20 }}>
                            {/* Username Input */}
                          {boolEmail ?   <TextInput
                                placeholder="Email"
                                value={email}
                                onChangeText={text => setEmail(text)}
                                style={styles.input}
                            />:   <TextInput
                            placeholder="Phone Number"
                            value={number}
                            onChangeText={text => SetNumber(text)}
                            style={styles.input}
                            keyboardType='numeric'
                        />}

                            {/* Email Input */}
                            

                          

                           
                          
                            <View >
                                {boolEmail ? <TouchableOpacity onPress={()=>{setBoolEmail(!boolEmail)}}>
                                    <Text style={{textAlign:'center',color:'#BA8B5A',fontSize:20,fontWeight:'bold',textDecorationLine:'underline'}}>or via PhoneNumber</Text>
                                </TouchableOpacity> : <TouchableOpacity onPress={()=>{setBoolEmail(!boolEmail)}} ><Text style={{textAlign:'center',color:'#BA8B5A',fontSize:20,fontWeight:'bold',textDecorationLine:'underline'}}>or via Email</Text></TouchableOpacity>}
                            </View>
                        
                        </View>

                      
                    </ScrollView>
                

                {/* Bottom Buttons */}
                <View style={styles.bottomButtonContainer}>
                    <CustomButton
                        bgcolor={'#BA8B5A'}
                        color={'white'}
                        onclick={() => {navigation.navigate('EmailVerificaiton',{isEmail:boolEmail})}} // Show Modal1 on button click
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

   
    bottomButtonContainer: {
        padding: 10,
        alignItems: 'center',
    },
});

export default Email;
