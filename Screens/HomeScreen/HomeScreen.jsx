import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import StoryCard from '../../Components/StoryCard';
import dataStoryImage from '../../randomData/story';
import Thought from '../../Components/Book/Thought';
import bookThought from '../../randomData/bookthought';

export default function HomeScreen() {
    const data = dataStoryImage;
    const thought = bookThought;
    return (
        <SafeAreaView style={styles.container}>
          
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:30,fontWeight:'bold'}}>Good Afternoon</Text>
            <View style={{flexDirection:'row',alignItems:'center',padding:3,}}>
              <TouchableOpacity style={{margin:10}} ><Image style={{marginLeft:3}} source={require("../../assets/bell.png")}/></TouchableOpacity>
               <TouchableOpacity><Image style={{height:40,width:40,borderRadius:20}} source={require("../../assets/profile1.jpeg")} /></TouchableOpacity> 
            </View>
          </View>


          <View >
           <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            {data.map((item,index)=>{
                return <StoryCard key={index}  uri={item.url} userName={item.userName}/>
            })}
           </ScrollView>
          
          </View>
           <ScrollView showsVerticalScrollIndicator={false}>
           <View style={{paddingTop:20,paddingBottom:20,paddingLeft:10,paddingRight:10}}> 
             <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>

                {thought.map((item,index)=>{
                    return <Thought  key={index} imageUrl={item.url} thoughtValue={item.thought}/>
                })}
             </ScrollView>
           </View>
           
           </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor:'#FAF7EF',
     
    },
    text: {
        color:'black',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
