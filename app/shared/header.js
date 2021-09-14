import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {
  
  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <View style={styles.header}>
      <ImageBackground source={require('../assets/images/game_bg.png')} style={styles.header}>
        <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
        <View style={styles.headerTitle}>
          <Image source={require('../assets/images/heart_logo.png')} style={styles.headerImage} />
          <Text style={styles.headerText}>GameZone</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 75,
    flexDirection: 'row',
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
    elevation: 3,
    shadowColor: '#333',
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity:  0.2,
    shadowRadius: 1,
    overflow: 'hidden',
    paddingBottom: 10
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1
  },
  headerTitle: {
    flexDirection: 'row'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
  icon: {
    position: 'absolute',
    left: 16
  }
})