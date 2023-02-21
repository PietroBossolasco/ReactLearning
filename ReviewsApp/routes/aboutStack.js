import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about'

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = () => (
    <Navigator
    screenOptions={{
            headerMode:'screen',
            headerStyle: {
                backgroundColor: '#eee'
            },
            headerTintColor: '#444',
        }}
    >
        <Screen
            name='about'
            component={About}
            options={{ title: 'about GameZone' }}
        />
    </Navigator>
)

export default AboutStack;