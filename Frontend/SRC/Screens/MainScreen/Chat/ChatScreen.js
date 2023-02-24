import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NameCard from '../../../Components/NameCard'
import Header from '../../../Components/Header'
import BottomTab from '../../../Components/BottomTab'
import AllApi from '../../../Api/AllApi'
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function ChatScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ height: height, width: width, alignItems: 'center', justifyContent: 'space-between' }}>
                <Header page={'Chat'} />
                <FlatList
                    data={AllApi}
                    renderItem={({ item }) => {
                        return (
                            <Pressable style={{ height: 70, width: width - 20, backgroundColor: 'white', alignItems: 'center', marginBottom: 3, marginTop: 3, flexDirection: 'row' }}
                                onPress={() => {
                                    navigation.navigate('MainChat', {
                                        name: item.name
                                    })
                                }}
                            >
                                <Image
                                    source={require('../../../../assets/ALL_iMAGE/Cartoon.jpg')}
                                    style={{ height: 50, width: 50, borderRadius: 50, margin: 12 }}
                                />
                                <Text style={{ fontSize: 20, fontWeight: '900', margin: 12 }}>
                                    {item.name}
                                </Text>
                            </Pressable>
                        )
                    }}
                />
                <BottomTab page={'Chat'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
})