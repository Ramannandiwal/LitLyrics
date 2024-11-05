import React, { useState } from 'react';
import { Modal, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CustomButton from '../CustomButton';



const Modal2 = ({
    isVisible,
    next,
    message,
    heading,
  
    navigation
}) => {
    const [show,setShow]=useState(false);
    return(
        <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
      
    >
        <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
                <View style={{ padding: 4 }}>

                    <Text style={{ fontWeight: "bold", fontSize: 24 }}> {heading}</Text>

                </View>
                <View style={{ padding: 4 }}>
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>{message}</Text>
                </View>


                <View style={{padding:35}}>

                 <TouchableOpacity onPress={()=>{setShow(!show)}} >
                    {show ?   <Image source={require("../../assets/off.png")}/> :   <Image source={require("../../assets/on.png")}/>}
                 </TouchableOpacity>
                </View>

            <View style={{padding:10}}>
                <CustomButton
                
                bgcolor={"#BA8B5A"}
                color={"white"}
                onclick={()=>{next()}}
                text={"Continue"}
                width={"90%"}
                fontSize={18}
                key={"sljsl"}
                radius={30}
                />
            </View>




            </View>

        </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    modalContainer: {
        width: '80%',
        height:'40%',
        padding: 18,
        backgroundColor: '#FAF7EF',
        borderRadius: 20,
        alignItems: 'center',
     
    },
    modalText: {

        fontSize: 18,
        color: 'black',
        marginTop: 20,
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

export default Modal2;
