import React, { useState } from 'react';
import { View,Text,StyleSheet,FlatList, TouchableOpacity,Modal,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import ReviewForm from './reviewForm';
export default function Home({navigation}) {

    const[reviews,setReviews]=useState([
        {title:'Ibrahim Zakaria', rating:5,body:'This is Best Game Ive played in myt life',key:'1'},
        {title:'Bilal Zakaria', rating:3,body:'Awesome Game',key:'2'},
        {title:'Mohamad Zakaria', rating:2,body:'Yakkk!!',key:'3'},
    ])
    const [modalOpen, setModalOpen] = useState(false);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
          return [review, ...currentReviews];
        });
        setModalOpen(false);
      }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                        name='close'
                        size={24}
                        style={ {...styles.modalToggle, ...styles.modalClose}}
                        onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
            data={reviews}
            renderItem={({item})=>
                (
                    <TouchableOpacity onPress={()=>navigation.navigate('Review Details',item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )
            }
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#f2f2f2',
      padding: 10,
      borderRadius: 15,
      alignSelf: 'center',
      backgroundColor:'#fff'
    },
    modalClose: {
      marginTop: 20,
      marginBottom: 0
    },
    modalContent: {
      flex: 1,
  
    }
  });