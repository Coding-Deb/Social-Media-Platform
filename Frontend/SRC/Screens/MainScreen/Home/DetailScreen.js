import { Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { FontAwesome } from 'react-native-vector-icons'


const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function DetailScreen() {
    const Route = useRoute()
    return (
        <View style={styles.container}>
            <View style={{ height: height, width: width, alignItems: 'center',justifyContent:'center', margin: 25 }}>
                <Text style={{ fontSize: 20, fontWeight: '800' }}>
                    {Route.params.name}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        justifyContent: 'center',
    },
})