import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Registration } from "./screens";

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
                initialRouteName={'Registration'}
            >
                <Stack.Screen name="Registration" component={Registration} />
            </Stack.Navigator>
        </NavigationContainer>
        
    );
}

export default App;