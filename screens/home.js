import React, { useState } from 'react';
import { View,Text,StyleSheet,FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Home({navigation}) {

    const[reviews,setReviews]=useState([
        {title:'Ibrahim Zakaria', rating:5,body:'This is Best Game Ive played in myt life',key:'1'},
        {title:'Bilal Zakaria', rating:3,body:'Awesome Game',key:'2'},
        {title:'Mohamad Zakaria', rating:2,body:'Yakkk!!',key:'3'},
    ])
   
    return (
        <View style={globalStyles.container}>
            <FlatList
            data={reviews}
            renderItem={({item})=>
                (
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate('ReviewDetails',item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )
            }
            />
            
        </View>
    )
}

