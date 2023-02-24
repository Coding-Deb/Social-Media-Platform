import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NameCard from '../../../Components/NameCard'
import Header from '../../../Components/Header'
import BottomTab from '../../../Components/BottomTab'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function ChatScreen() {
    return (
        <View style={styles.container}>
            <View style={{ height: height, width: width, alignItems: 'center', justifyContent:'space-between'}}>
                <Header page={'Chat'}/>
                <Text style={{ fontSize: 22, fontWeight: '900' }}>
                    ChatScreen
                </Text>
                <BottomTab page={'Chat'}/>
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