import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../Components/Header'
import { useRoute } from '@react-navigation/native'
import { TextInput } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import { Ionicons } from '@expo/vector-icons';

export default function MainChatScreen() {
    const Route = useRoute()
    return (
        <View style={styles.container}>
            <Header page={'MainChat'} name={Route.params.name} />
            <View style={{ height: 60, width: width-20, alignItems: 'center' ,justifyContent:'space-around',flexDirection:'row', margin: 25, backgroundColor: 'white', padding: 12, borderRadius: 20,}}>
                <TextInput
                    placeholder='Enter Here ...'
                    multiline={true}
                    style={{ height: 55, width: width - 60, justifyContent: 'center', marginRight: 25, backgroundColor: 'white', padding: 12, borderRadius: 20, fontSize: 17, fontWeight: '600' ,}}
                />
                <Ionicons name="send" size={24} color="#0E8F61" style={{marginRight:8}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})