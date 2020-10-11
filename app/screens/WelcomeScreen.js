import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

import colors from '../config/colors'

function WelcomeScreen(props) {
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

            <View style = {styles.loginButton}></View>
            <View style = {styles.registerButton}></View>
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
        backgroundColor: colors.primary
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
        backgroundColor: colors.secondary
    },
})

export default WelcomeScreen;