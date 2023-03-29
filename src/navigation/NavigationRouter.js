import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTab } from '../screens/Tabs';
import { Detail } from '../screens';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
    gestureEnabled: false,
    headerBackTitle: '',
};

export default function NavigationRouter() {

    return (
        <Stack.Navigator initialRouteName='home' screenOptions={globalScreenOptions}>
            <Stack.Screen name="home" component={BottomTab} options={{headerShown: false, headerStyle: { backgroundColor: 'transparent', elevation: 0 }, headerTransparent: true}}/>
            <Stack.Screen name="detail" component={Detail} options={{headerShown: true, title: ''}}/>
        </Stack.Navigator>
    )
}