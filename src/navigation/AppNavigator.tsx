import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Onboard from '../screens/Onboard';
import Interests from '../screens/Interests';
import MapScreen from '../screens/MapScreen';
import Filters from '../screens/Filters';

export type RootStackParamList = {
  Onboard: undefined;
  Interests: undefined;
  MapScreen: undefined;
  Filters: undefined;
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
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="Filters" component={Filters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
