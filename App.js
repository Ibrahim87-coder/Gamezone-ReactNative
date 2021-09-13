import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import ReviewDetails from './screens/reviewDetails';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{title:'Game Zone',headerTintColor:'#444',headerStyle:{backgroundColor: '#eee',height:60}}}/>
        <Stack.Screen name="ReviewDetails" component={ReviewDetails}  options={{title:'Review Details',headerStyle:{backgroundColor: '#eee',height:60}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

    
}
  
