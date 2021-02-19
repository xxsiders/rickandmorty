import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { Configs } from '../root/Configs';
import { Home } from '../screens';


const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <>
            <StatusBar barStyle={Configs.strings.barStyle} />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    animationEnabled: true,
                    cardOverlayEnabled: true,
                    cardShadowEnabled: true
                }}>
                    <Stack.Screen name='Home' component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppStack