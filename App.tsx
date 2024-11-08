/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Splash from './Screens/SplashScreen/Splash';
import WelcomeScreen from './Screens/WelcomeScreen/WelcomeScreen';
import FormScreen from './Screens/FormScreen/FormScreen';
import MyCustomHeader from './Components/MyCustomHeader';
import { StatusBar } from 'react-native';
import You1 from './Screens/You_Are_ALL_Set/You_Are_ALL_Set_1/You1';
import You2 from './Screens/You_Are_ALL_Set/You_Are_ALL_Set_2/You2';
import You3 from './Screens/You_Are_ALL_Set/You_Are_All_Set3/You3';
import GenderScreen from './Screens/GenderScreen/GenderScreen';
import AgeScreen from './Screens/AgeScreen/AgeScreen';
import GenreScreen from './Screens/GenreScreen/GenreScreen';
import ProfileScreen from './Screens/ProfileScreen/Profile';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';
import SignIn from './Screens/SignIn/SignIn';
import Email from './Screens/ForgotPassword/EmailSend/Email';
import EmailVerificaiton from './Screens/ForgotPassword/EmailVerification/EmailVerification';
const Stack = createNativeStackNavigator();

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            SplashScreen.hide();
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Splash />;
    }

    return (
        <>
            {/* Global StatusBar configuration */}
            <StatusBar barStyle={'dark-content'} backgroundColor={'#FAF7EF'} />


            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen
                        name="Welcome"
                        component={WelcomeScreen}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="FormScreen"
                        component={FormScreen}
                        options={({ navigation }) => ({
                            headerTransparent: true,
                            header: () => (
                                <MyCustomHeader
                                    title=""
                                    onBackPress={() => navigation.goBack()}
                                />
                            ),
                            headerShadowVisible: false,
                        })}
                    />
                    <Stack.Screen
                        name="You1"
                        component={You1}
                        options={({ navigation }) => ({
                            headerTransparent: true,
                            header: () => (
                                <MyCustomHeader
                                    title=""
                                    onBackPress={() => navigation.goBack()}
                                />
                            ),
                            headerShadowVisible: false,
                        })}
                    />
                    <Stack.Screen
                        name="You2"
                        component={You2}
                        options={({ navigation }) => ({
                            headerTransparent: true,
                            header: () => (
                                <MyCustomHeader
                                    title=""
                                    onBackPress={() => navigation.goBack()}
                                />
                            ),
                            headerShadowVisible: false,
                        })}
                    />
                    <Stack.Screen
                        name="You3"
                        component={You3}
                        options={({ navigation }) => ({
                            headerTransparent: true,
                            header: () => (
                                <MyCustomHeader
                                    title=""
                                    onBackPress={() => navigation.goBack()}
                                />
                            ),
                            headerShadowVisible: false,
                        })}
                    />
                    <Stack.Screen
                        name="GenderScreen"
                        component={GenderScreen}
                        options={({ navigation }) => ({
                            headerTransparent: true,
                            header: () => (
                                <MyCustomHeader
                                    title=""

                                    loading={true}
                                    width={'20%'}
                                    onBackPress={() => navigation.goBack()}
                                />
                            ),
                            headerShadowVisible: false,
                        })}
                    />

                    <Stack.Screen
                        name="AgeScreen"
                        component={AgeScreen}
                        options={({ navigation }) => ({
                            headerTransparent: true,
                            header: () => (
                                <MyCustomHeader
                                    title=""

                                    loading={true}
                                    width={'40%'}
                                    onBackPress={() => navigation.goBack()}
                                />
                            ),
                            headerShadowVisible: false,
                        })}
                    />

                    <Stack.Screen
                        name="GenreScreen"
                        component={GenreScreen}
                        options={({ navigation }) => ({
                            headerTransparent: true,
                            header: () => (
                                <MyCustomHeader
                                    title=""

                                    loading={true}
                                    width={'60%'}
                                    onBackPress={() => navigation.goBack()}
                                />
                            ),
                            headerShadowVisible: false,
                        })}
                    />

                    <Stack.Screen
                        name="ProfileScreen"
                        component={ProfileScreen}
                        options={({ navigation }) => ({
                            headerTransparent: true,
                            header: () => (
                                <MyCustomHeader
                                    title=""

                                    loading={true}
                                    width={'80%'}
                                    onBackPress={() => navigation.goBack()}
                                />
                            ),
                            headerShadowVisible: false,
                        })}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUpScreen}
                        options={({ navigation }) => ({
                            headerTransparent: true,
                            header: () => (
                                <MyCustomHeader
                                    title=""

                                    loading={true}
                                    width={'100%'}
                                    onBackPress={() => navigation.goBack()}
                                />
                            ),
                            headerShadowVisible: false,
                        })}
                    />

                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={({ navigation }) => ({
                            headerTransparent: true,
                            header: () => (
                                <MyCustomHeader
                                    title=""

                                    loading={false}

                                    onBackPress={() => navigation.goBack()}
                                />
                            ),
                            headerShadowVisible: false,
                        })}
                    />
                    <Stack.Screen
                        name="Email"
                        component={Email}
                        options={({ navigation }) => ({
                            headerTransparent: true,
                            header: () => (
                                <MyCustomHeader
                                    title=""

                                    loading={false}

                                    onBackPress={() => navigation.goBack()}
                                />
                            ),
                            headerShadowVisible: false,
                        })}
                    />
                        <Stack.Screen
                        name="EmailVerificaiton"
                        component={EmailVerificaiton}
                        options={({ navigation,isEmail }) => ({
                            headerTransparent: true,
                            header: () => (
                                <MyCustomHeader
                                    title=""

                                    loading={false}

                                    onBackPress={() => navigation.goBack()}
                                />
                            ),
                            headerShadowVisible: false,
                        })}
                    />




                </Stack.Navigator>

            </NavigationContainer>
        </>
    );
};

export default App;
