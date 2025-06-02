import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Onboard from '../screens/Onboard';
import Interests from '../screens/Interests';

export type RootStackParamList = {
  Onboard: undefined;
  Interests: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboard"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Interests" component={Interests} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
