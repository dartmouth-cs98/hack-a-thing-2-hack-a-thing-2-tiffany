import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Button } from 'react-native';
import { } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AnnouncementScreen from './AnnouncementScreen';
import colors from '../config/colors'

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            style = {styles.background}
            source = {require("../assets/background.jpg")}
        >   
        {/* // structure logo and app name */}
        <View style = {styles.logoBanner}>
            <Image style = {styles.logo} source={require("../assets/housemate_icon.png")}/>
            <Text>Housemate Management</Text>
            
        </View>

        {/* <Button
            title = "Login"
            onPress = {() => navigation.navigate('Announcement')}
            /> */}
        <View style = {styles.loginButton}>
            {/* <Text style = {styles.text}>Login</Text> */}
            <Button
            title = "Login"
            onPress = {() => navigation.navigate('Announcement')}
            />
        </View> 
        
        <View style = {styles.registerButton}> 
            {/* <Text style = {styles.text}>Register</Text> */}
            <Button
            title = "Register"
            onPress = {() => navigation.navigate('Announcement')}
            />
        </View>
        </ImageBackground>

    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
        alignContent: "center",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoBanner: {
        position: "absolute",
        top: 100,
        alignItems: "center",
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.secondary,
        alignContent: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 30,
    },
})

export default WelcomeScreen;