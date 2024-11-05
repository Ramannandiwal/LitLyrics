import React from 'react';
import { Modal, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import CustomButton from '../Components/CustomButton';


const ModalPopUp = ({
    isVisible,
    onClose,
    message,
    heading,
    primaryAction,
    secondaryAction,
    primaryButtonText = "Yes, Please",
    secondaryButtonText = "No, Thanks",
    navigation
}) => (
    <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
    >
        <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
                <Text style={{fontWeight:'bold',fontSize:20,padding:3}}>{heading}</Text>
                <Text style={styles.modalText}>{message}</Text>
                <View style={styles.modalButtonContainer}>
                    <CustomButton
                    color={'red'}
                    bgcolor={'#FAF7EF'}
                    onclick={secondaryAction}
                    text={secondaryButtonText}
                    width={'90%'}
                    key={secondaryButtonText}
                    
                    />
                    <CustomButton
                    color={'white'}
                    bgcolor={'#BA8B5A'}
                    onclick={()=>{primaryAction()}}
                    text={primaryButtonText}
                    width={'90%'}
                    key={primaryButtonText}
                    
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
        padding: 20,
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

export default ModalPopUp;
