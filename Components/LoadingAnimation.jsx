import React from 'react';
import { Text, View } from 'react-native';

const LoadingAnimaton = ({
    width
}) => (
    <View style={{width:200,margin:20,height:15,borderRadius:20,backgroundColor:'#d6d6d6'}}>
       <View style={{width:width,height:'100%',borderTopLeftRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:20,borderBottomRightRadius:20,backgroundColor:'#BA8B5A'}}></View>
    </View>
);

export default LoadingAnimaton;
