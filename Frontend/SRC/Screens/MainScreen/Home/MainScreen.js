import { Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { FontAwesome } from 'react-native-vector-icons'
import Header from '../../../Components/Header'
import NameCard from '../../../Components/NameCard'
import BottomTab from '../../../Components/BottomTab'
import AllDataCard from '../../../Components/AllDataCard'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center', justifyContent:'space-between'}}>
        <Header page={'Home'}/>
        <AllDataCard/>
        <BottomTab page={'Home'}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    // justifyContent: 'center',
  },
})