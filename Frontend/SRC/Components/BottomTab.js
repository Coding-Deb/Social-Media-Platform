import { Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { FontAwesome } from 'react-native-vector-icons'
import { Foundation } from 'react-native-vector-icons'
import { MaterialIcons } from 'react-native-vector-icons'
import { Ionicons } from 'react-native-vector-icons'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function BottomTab({ page }) {
    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: 'white', height: 80, width: width, justifyContent: 'space-around', alignItems: 'center', hadowOffset: { height: 120, width: 120 }, shadowColor: 'black', shadowOpacity: 5.35, flexDirection: 'row', top: 30, }}>
            <Pressable onPress={() => { navigation.navigate('Main') }}>
                {
                    page == 'Home' ?
                        <Ionicons name="home" color="#0E8F61" size={30} />
                        :
                        <Ionicons name="home-outline" color="#0E8F61" size={30} />
                }
            </Pressable>
            <Pressable onPress={() => { navigation.navigate('Chat') }}>
                {
                    page == 'Chat' ?
                        <MaterialIcons name="chat-bubble" color="#0E8F61" size={30} />
                        :
                        <MaterialIcons name="chat-bubble-outline" color="#0E8F61" size={30} />
                }
            </Pressable>
            <Pressable>
                <Ionicons name="add-circle" color="#0E8F61" size={40} />
            </Pressable>
            <Pressable onPress={() => { navigation.navigate('Notification') }}>
                {
                    page == 'Notification' ?
                        <FontAwesome name="bell" color="#0E8F61" size={30} />
                        :
                        <FontAwesome name="bell-o" color="#0E8F61" size={30} />
                }
            </Pressable>
            <Pressable onPress={() => { navigation.navigate('Setting') }}>
                {
                    page == 'Setting' ?
                        <Ionicons name="settings-sharp" color="#0E8F61" size={30} />
                        :
                        <Ionicons name="settings-outline" color="#0E8F61" size={30} />
                }
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({})