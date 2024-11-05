import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import LoadingAnimation from '../../Components/LoadingAnimation';
import MyCustomHeader from '../../Components/MyCustomHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import RadioButton from '../../Components/RadioButton';
import CustomButton from '../../Components/CustomButton';

const GenderScreen = ({ navigation }) => {
    // Define state for selected gender
    const [selectedGender, setSelectedGender] = useState(null);

    return (
        <SafeAreaView style={{ backgroundColor: '#FAF7EF', flex: 1 }}>
            {/* Main content */}
            <View style={{ paddingHorizontal: 10, backgroundColor: '#FAF7EF' }}>
                {/* Header Section */}
                <View style={{ marginTop: 80, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: "black", fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>What is Your Gender?</Text>
                    <Image
                        style={{ width: 35, height: 35, marginLeft: 10 }}
                        source={require("../../assets/person.png")}
                    />
                </View>
                <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 8 }}>Select gender for better content</Text>
                
                {/* Radio Button Options */}
                <View style={{ marginTop:30,height:200,flexDirection:'column',justifyContent:'space-evenly' }}>
                    <RadioButton
                        isSelected={selectedGender === 'male'}
                        label={'I am male'}
                        onPress={() => setSelectedGender('male')}
                    />

                    <RadioButton
                        isSelected={selectedGender === 'female'}
                        label={'I am female'}
                        onPress={() => setSelectedGender('female')}
                    />

                    <RadioButton
                        isSelected={selectedGender === 'other'}
                        label={'Rather not say'}
                        onPress={() => setSelectedGender('other')}
                    />
                </View>
            </View>

            {/* Bottom Button */}
            <View style={{ position: 'absolute', bottom: 20, width: '100%', alignItems: 'center' }}>
                <CustomButton
                    bgcolor={'#BA8B5A'}
                    color={'white'}
                    onclick={() => {navigation.navigate('AgeScreen')}}
                    text={"Continue"}
                    width={'90%'}
                    key={"temp"}
                    radius={30}
                />
            </View>
        </SafeAreaView>
    );
};

export default GenderScreen;
