import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Registration, Login } from "./screens";
//import fonts from "./assets/fonts"
import React, { useState, useEffect } from 'react'
import * as font from 'expo-font'
import { AppLoading } from 'expo-font'
import { startClock } from 'react-native-reanimated';
import Tabs from "./navigation/tabs"
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    }
}

const Stack = createStackNavigator();

function App() {

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name='Home' component={Tabs} />

            </Stack.Navigator>
        </NavigationContainer>
        
    );
}

export default App;