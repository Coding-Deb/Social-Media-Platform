import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../Components/Header'
import BottomTab from '../../../Components/BottomTab'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function NotificationScreen() {
    return (
        <View style={styles.container}>
            <View style={{ height: height, width: width, alignItems: 'center', justifyContent: 'space-between' }}>
                <Header page={'Notification'} />
                <View style={{ width: width, alignItems: 'center', bottom: 220 }}>
                    <Pressable style={{ height: 50, width: width-10, borderBottomColor: 'black', borderBottomWidth: 2, marginBottom: 12 }}>
                        <Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 12 }}>
                            You Send A Post
                        </Text>
                    </Pressable>
                    <Pressable style={{ height: 50, width: width-10, borderBottomColor: 'black', borderBottomWidth: 2, marginBottom: 12 }}>
                        <Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 12 }}>
                            User Send A Post
                        </Text>
                    </Pressable>
                    <Pressable style={{ height: 50, width: width-10, borderBottomColor: 'black', borderBottomWidth: 2, marginBottom: 12 }}>
                        <Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 12 }}>
                            User Following You
                        </Text>
                    </Pressable>
                </View>
                <BottomTab page={'Notification'} />
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