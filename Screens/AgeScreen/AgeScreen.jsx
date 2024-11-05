import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../Components/CustomButton';

const AgeScreen = ({ navigation }) => {
    const [ageOption, setAgeOption] = useState(null);

    const ageGroup = ['14-17', '18-24', '25-29', '30-34', '35-39', '40-44', '45-49', '>50'];

    return (
        <SafeAreaView style={{ backgroundColor: '#FAF7EF', flex: 1 }}>
            {/* Main content */}
            <View style={{ paddingHorizontal: 10, backgroundColor: '#FAF7EF' }}>
                {/* Header Section */}
                <View style={{ marginTop: 80, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: "black", fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>What is Your Age?</Text>
                    <Image
                        style={{ width: 35, height: 35, marginLeft: 10 }}
                        source={require("../../assets/age.png")}
                    />
                </View>
                
                {/* Radio Button Options */}
                <View style={{ marginTop: 30, padding: 2, flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    {ageGroup.map((item) => (
                        <View style={{ width: "47%", marginTop: 15 }} key={item}>
                            <CustomButton
                                bgcolor={ageOption === item ? '#BA8B5A' : '#FAF7EF'}
                                color={ageOption === item ? '#FAF7EF' : '#BA8B5A'}
                                text={item.toString()}
                                onclick={() => setAgeOption(item)}
                                width={'90%'}
                                radius={25}
                            />
                        </View>
                    ))}
                </View>
            </View>

            {/* Bottom Button */}
            <View style={{ position: 'absolute', bottom: 20, width: '100%', alignItems: 'center' }}>
                <CustomButton
                    bgcolor={'#BA8B5A'}
                    color={'white'}
                    onclick={() => { navigation.navigate('GenreScreen') }}
                    text={"Continue"}
                    width={'90%'}
                    radius={30}
                />
            </View>
        </SafeAreaView>
    );
}

export default AgeScreen;
