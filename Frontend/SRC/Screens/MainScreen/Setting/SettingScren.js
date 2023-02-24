import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import Header from '../../../Components/Header'
import BottomTab from '../../../Components/BottomTab'
import Context from '../../../Context/Context'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import { firebase } from '../../../Firebase/config'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function SettingScren() {
    const { show, setShow } = useContext(Context)
    const [islogged, setIslogged] = useState(null)
    const navigation = useNavigation()

    const Logout = () => {
        firebase.auth().signOut()
            .then(() => {
                setIslogged(null)
                console.log('Logged Out Successfully')
                navigation.navigate('Splash')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <View style={styles.container}>
            <View style={{ height: height, width: width, alignItems: 'center', justifyContent: 'space-between' }}>
                <Header page={'Setting'} />
                <View style={{ width: width, alignItems: 'center', bottom: 180 }}>
                    <Pressable style={{ height: 50, width: width, borderBottomColor: 'black', borderBottomWidth: 2, marginBottom: 12, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 12 }}>
                            Change Username
                        </Text>
                        <FontAwesome name="id-card" size={25} color="black" style={{ marginRight: 30 }} />
                    </Pressable>
                    <Pressable style={{ height: 50, width: width, borderBottomColor: 'black', borderBottomWidth: 2, marginBottom: 12, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 12 }}>
                            Change Profile Picture
                        </Text>
                        <FontAwesome name="user" size={25} color="black" style={{ marginRight: 30 }} />
                    </Pressable>
                    <Pressable style={{ height: 50, width: width, borderBottomColor: 'black', borderBottomWidth: 2, marginBottom: 12, justifyContent: 'space-between', flexDirection: 'row' }}
                    onPress={()=>{navigation.navigate('ChangeUserDetails')}}
                    >
                        <Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 12 }}>
                            Change Password
                        </Text>
                        <FontAwesome name="lock" size={25} color="black" style={{ marginRight: 30 }} />
                    </Pressable>
                    <Pressable style={{ height: 50, width: width, borderBottomColor: 'black', justifyContent: 'space-between', borderBottomWidth: 2, marginBottom: 12, flexDirection: 'row' }}
                        onPress={() => {
                            Logout()
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: '800', marginLeft: 12 }}>
                            Log Out
                        </Text>
                        <MaterialCommunityIcons name="logout" size={25} color="black" style={{ marginRight: 30 }} />
                    </Pressable>
                </View>
                <BottomTab page={'Setting'} />
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