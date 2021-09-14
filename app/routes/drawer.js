import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  )
}

export default Navigator;