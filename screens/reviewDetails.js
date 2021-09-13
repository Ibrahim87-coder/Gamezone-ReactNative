import React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({route,navigation}) {

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{route.params.title}</Text>
            <Text style={globalStyles.titleText}>{route.params.body}</Text>
            <Text style={globalStyles.titleText}>{route.params.rating}</Text>
        </View>
    )
}