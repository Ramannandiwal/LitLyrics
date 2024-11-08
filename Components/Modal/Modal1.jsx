import React from 'react';
import { Modal, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CustomButton from '../CustomButton';

const Modal1 = ({
    isVisible,
    onClose,
    next,
    heading ="Sign Up! Successfully",
    smallHeading ="Your account has been created, wait for a while we are preparing for you",
    buttonText = "Thanks"
}) => (
    <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
    >
        <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View>
                <Image 
                style={{width:200,height:200,borderRadius:100}}
                 source={require("../../assets/profilecircle.png")}
                />
                </View> 
                <View>
                    <Text style={{textAlign:'center',fontWeight:"bold",fontSize:25,color:'#BA8B5A'}}>{heading}</Text>
                </View>
                <View style={{marginTop:8}}>
                    <Text style={{padding:8,fontSize:16,textAlign:'center'}}>{smallHeading}</Text>
                </View>
                <View style={{marginTop:10}}>
                    <Image
                     source={require('../../assets/loadingSpinner.png')}
                    />
                </View>


                <View style={{marginTop:30}}>
               <CustomButton 
                bgcolor={"#BA8B5A"}
                color={"white"}
                text={buttonText}
                onclick={()=>{next()}}
                width={"90%"}
                fontSize={15}
                key={"te/mpsl"}
                radius={25}
               />
            </View>
              
            </View>
            
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    modalContainer: {
        width: '80%',
        padding: 30,
        backgroundColor: '#FAF7EF',
        borderRadius: 15,
        alignItems: 'center',
    },
    modalText: {
        
        fontSize: 18,
        color: 'black',
        marginTop:20,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButtonContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    modalButton: {
        padding: 10,
        backgroundColor: '#BA8B5A',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        width: '90%',
    },
    modalButtonSecondary: {
        backgroundColor: '#FAF7EF',
    },
    modalButtonText: {
      
        fontSize: 20,
    },
});

export default Modal1;
