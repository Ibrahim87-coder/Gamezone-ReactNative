import React from 'react';
import { View,Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Screen</Text>
            <View>
                <Text>GameZone is a React Native beginner project: a simple game rating app, kind of like a Todo App. Used navigation, Formik, Yup packages and more</Text>
            </View>
        </View>
    )
}
