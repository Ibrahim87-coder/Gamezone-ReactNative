import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home Page"
        component={Home}
        options={({ navigation }) => {
          return {
            header: () => <Header navigation={navigation} />
          }
        }}
      />
      <Stack.Screen
       name="Review Details" component={ReviewDetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;