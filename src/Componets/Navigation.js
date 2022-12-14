import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen'
import LoginScreen from '../LoginScreen';
import RegistrationScreen from '../RegistrationScreen';


const Stack = createNativeStackNavigator();


const Navigation = () => {
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true}} />
                <Stack.Screen name="Register" component={RegistrationScreen} options={{ headerShown: true}} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})