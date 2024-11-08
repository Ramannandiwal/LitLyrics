import { View, Text, Image } from 'react-native'
import React from 'react'

const StoryCard = ({
   userName,
   uri,
}) => {
  return (
    <View>
     <View style={{borderWidth:3,borderColor:"#BA8B5A",borderRadius:"50%",padding:4,margin:7}}>
        <View style={{borderRadius:"50%",backgroundColor:'red'}}>
          <Image resizeMode="cover" style={{width:60,height:60,borderRadius:30}} source={{uri:uri}}/>  
        </View>
     </View>
     <Text style={{textAlign:'center'}}> {userName}  </Text>
    </View>
  )
}

export default StoryCard