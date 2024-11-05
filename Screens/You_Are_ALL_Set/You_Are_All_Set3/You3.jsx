import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../Components/CustomButton';

const You3 = ({ navigation }) => (
    <SafeAreaView style={{ backgroundColor: '#FAF7EF', flex: 1 }}>
        <View style={{ marginTop: 55, flexDirection: 'column', width: '100%', backgroundColor: '#FAF7EF' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: "black", fontSize: 30, fontWeight: 'bold',marginLeft:10 }}>You’re all set</Text>
                <Image
                    style={{ width: 35, height: 35, marginLeft: 10 }}
                    source={require("../../../assets/person.png")}
                />
            </View>
            <Text style={{ fontSize: 18, marginLeft:10 }}>Below are the main features of the app</Text>
            <View style={{ marginTop: 20 }}>
                <Image
                    style={{ width: '100%', height: 290, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                    resizeMode="cover"
                    source={require('../../../assets/You3.png')}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ textAlign: 'center', fontSize: 25, color: '#BA8B5A', fontWeight: 'bold' }}>Listen to Audiobooks</Text>
            </View>
            <View>
                <Text style={{ textAlign: "center", fontSize: 18 }}>Enjoy books with audio, anywhere, anytime</Text>
            </View>
        </View>
        <View style={{ position: 'absolute', bottom: 20, width: '100%', alignItems: 'center' }}>
            <CustomButton
                radius={30}
                bgcolor={"#BA8B5A"}
                color={'white'}
                onclick={() => {navigation.navigate('GenderScreen')}}
                text={'Start Exploring'}
                width={'90%'}
                key={'hello'}
            />
        </View>
    </SafeAreaView>
);

export default You3;
