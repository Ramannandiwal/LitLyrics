import React from 'react';
import { View, Text, Image } from 'react-native';

const Thought = ({ thoughtValue, imageUrl }) => {
  return (
    <View
      style={{
        margin: 8,
        borderWidth: 1,
        borderColor: '#EFE3CB',
        borderRadius: 15,
        backgroundColor: '#EFE3CB',
        width: 200,
        height: 300,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        // Shadow for Android
        elevation: 10,
      }}
    >
      <Text
        style={{
          color: 'black',
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
          paddingHorizontal: 10,
        }}
      >
        {thoughtValue}
      </Text>
      <View style={{ position: 'absolute', bottom: 0, left: 20 }}> 
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 80, height: 100 }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default Thought;
