import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import {Ionicons} from '@expo/vector-icons'


export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>



      <ImageBackground         
        source={require('../assets/background.jpeg')}
        style={{ flex: 1, justifyContent: 'flex-start' }}
        resizeMode='repeat'>

        <View style={styles.header}>
          <Text style={styles.title}>Lista de Produtos</Text>
          <Ionicons name="trash" size={32} color='#fff'/>
        </View>

        <View style={{ flex: 1 }}></View>

        <View style={styles.footer}>


        </View>

      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingBottom: 20,
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color:'#fff'
  }

})