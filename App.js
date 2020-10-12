import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, Button } from 'react-native';
import { } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from "./app/screens/WelcomeScreen";
import AnnouncementScreen from './app/screens/AnnouncementScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Announcement" component={AnnouncementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;