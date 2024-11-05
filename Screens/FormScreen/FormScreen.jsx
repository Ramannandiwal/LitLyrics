import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import RadioButton from '../../Components/RadioButton';
import ModalPopUp from '../../Components/ModalPopUp';
import { SafeAreaView } from 'react-native-safe-area-context';

const genres = ['Fiction', 'Mystery', 'History', 'Self Help'];
const formats = ['Reading', 'AudioBooks', 'Both'];
const readingTimes = ['Morning', 'Afternoon', 'Evening', 'Late Night'];
const readingGoals = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

const FormScreen = ({navigation}) => {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedFormats, setSelectedFormats] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [selectedGoals, setSelectedGoals] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleSelection = (item, setSelected, selected) => {
        if (selected.includes(item)) {
            setSelected(selected.filter(i => i !== item));
        } else {
            setSelected([...selected, item]);
        }
    };
    const handleSkip = () => {
        setIsModalVisible(true);
    };

    return (
       <SafeAreaView style={{backgroundColor:'#FAF7EF'}}>
         <View style={{ marginTop: 50,backgroundColor:'#FAF7EF',padding:10,height:'100%',width:'100%' }} contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.heading}>Personalised Form 📋</Text>
            <Text style={styles.subheading}>Please fill the form below. You may select more than one field.</Text>

            <Text style={styles.sectionTitle}>Genre</Text>
            <View style={styles.rowContainer}>
                {genres.map((genre, index) => (
                    <RadioButton 
                        key={index} 
                        label={genre} 
                        isSelected={selectedGenres.includes(genre)}
                        onPress={() => toggleSelection(genre, setSelectedGenres, selectedGenres)} 
                    />
                ))}
            </View>

            <Text style={styles.sectionTitle}>Preferred Formats</Text>
            <View style={styles.rowContainer}>
                {formats.map((format, index) => (
                    <RadioButton 
                        key={index} 
                        label={format} 
                        isSelected={selectedFormats.includes(format)}
                        onPress={() => toggleSelection(format, setSelectedFormats, selectedFormats)} 
                    />
                ))}
            </View>

            <Text style={styles.sectionTitle}>Preferred Reading Time</Text>
            <View style={styles.rowContainer}>
                {readingTimes.map((time, index) => (
                    <RadioButton 
                        key={index} 
                        label={time} 
                        isSelected={selectedTimes.includes(time)}
                        onPress={() => toggleSelection(time, setSelectedTimes, selectedTimes)} 
                    />
                ))}
            </View>

            <Text style={styles.sectionTitle}>Reading Goal</Text>
            <View style={styles.rowContainer}>
                {readingGoals.map((goal, index) => (
                    <RadioButton 
                        key={index} 
                        label={goal} 
                        isSelected={selectedGoals.includes(goal)}
                        onPress={() => toggleSelection(goal, setSelectedGoals, selectedGoals)} 
                    />
                ))}
            </View>

            <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleSkip} style={[styles.button, styles.skipButton]}>
        <Text style={styles.buttonText}>Skip For Now</Text>
    </TouchableOpacity>
</View>

<ModalPopUp
                isVisible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                message="Would you like to receive more personalized recommendations?"
                heading={"Daily Quote Notification"}
                primaryAction={() => {
                    setIsModalVisible(false)
                    navigation.navigate('You1')
                } }
                secondaryAction={() => setIsModalVisible(false)}
                primaryButtonText="Yes, Please"
                secondaryButtonText="No, Thanks"
                navigation={navigation}
            />
        </View>
       </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 20,
        paddingBottom: 40,
        backgroundColor: '#FAF7EF',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'left',
    },
    subheading: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
        textAlign: 'left',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    button: {
        flex: 1,
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#BA8B5A',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    skipButton: {
        backgroundColor: '#BA8B5A',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
   
});

export default FormScreen;
