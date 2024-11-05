import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../Components/CustomButton';

const GenreScreen = ({ navigation }) => {
    // Define state for selected genres
    const [selectedGenres, setSelectedGenres] = useState([]);

    const genres = [
        'Romance', 'Fantasy', 'Sci-Fi', 'Mystery', 'Thriller', 'Horror', 
        'Psychology', 'Inspiration', 'Comedy', 'Action', 'Adventure', 
        'Comics', "Children's", 'Art & Photography', 'Food & Drink', 
        'Biography', 'Science & Technology'
    ];

    // Function to handle genre selection
    const toggleGenre = (genre) => {
        setSelectedGenres((prevSelectedGenres) => {
            if (prevSelectedGenres.includes(genre)) {
                return prevSelectedGenres.filter((item) => item !== genre);
            } else {
                return [...prevSelectedGenres, genre];
            }
        });
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#FAF7EF', flex: 1 }}>
            {/* Main content */}
            <View style={{ paddingHorizontal: 10, backgroundColor: '#FAF7EF' }}>
                {/* Header Section */}
                <View style={{ marginTop: 80, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: "black", fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>
                        Choose the Book Genre You Like❤️
                    </Text>
                </View>
                <Text style={{ fontSize: 18, marginLeft: 10, marginTop: 8 }}>
                    Select your preferred book genre for better recommendations or you can skip it
                </Text>
                
                {/* Genre Selection Options */}
                <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    {genres.map((genre) => (
                        <View style={{ width: "30%", marginTop: 15 }} key={genre}>
                            <CustomButton
                                bgcolor={selectedGenres.includes(genre) ? '#BA8B5A' : '#FAF7EF'}
                                color={selectedGenres.includes(genre) ? '#FAF7EF' : '#BA8B5A'}
                                text={genre}
                                onclick={() => toggleGenre(genre)}
                                width={'100%'}
                                fontSize={13}
                                radius={25}
                            />
                        </View>
                    ))}
                </View>
            </View>

            {/* Bottom Buttons */}
            <View style={{ position: 'absolute', bottom: 20, width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
                <CustomButton
                    bgcolor={'#EFE3CB'}
                    color={'#BA8B5A'}
                    onclick={() => {}}
                    text={"Skip"}
                    width={'45%'}
                    radius={30}
                />
                <CustomButton
                    bgcolor={'#BA8B5A'}
                    color={'white'}
                    onclick={() => navigation.navigate('ProfileScreen')}
                    text={"Continue"}
                    width={'45%'}
                    radius={30}
                />
            </View>
        </SafeAreaView>
    );
};

export default GenreScreen;
