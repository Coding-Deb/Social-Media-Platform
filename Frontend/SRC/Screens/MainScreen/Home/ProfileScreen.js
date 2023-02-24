import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { firebase } from '../../../Firebase/config'
import Header from '../../../Components/Header'
import BottomTab from '../../../Components/BottomTab'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function ProfileScreen() {
    const [islogged, setIslogged] = useState(null)
    const [userdata, setUserdata] = useState('')

    useEffect(() => {
        const checklogin = () => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    setIslogged(user.uid)
                    // console.log(user.uid)
                }
                else {
                    setIslogged(null)
                    console.log('No User Logged In')
                }
            })
        }
        checklogin()
    }, [])

    // console.log(islogged);


    useEffect(() => {
        const getuserData = async () => {
            const userdata = firebase.firestore().collection('User').where('uid', '==', islogged)
            const doc = await userdata.get()

            if (!doc.empty) {
                doc.forEach((doc) => {
                    setUserdata(doc.data());
                })
            }
            else {
                console.log('no user data');
            }
        }
        getuserData()
    }, [islogged])

    console.log(userdata);

    return (
        <View style={styles.container}>
            <View style={{ height: height, width: width, alignItems: 'center', justifyContent: 'space-between' }}>
                <Header page={'Profile'} />
                <View style={{ width: width, alignItems: 'center', justifyContent: 'space-around', height: 500 ,marginBottom:150}}>
                    <Image
                        source={require('../../../../assets/ALL_iMAGE/Cartoon.jpg')}
                        style={{ height: 200, width: 200, borderRadius: 100 }}
                        resizeMode='contain'
                    />
                    {
                        islogged === null ?
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ProfileScreen</Text>
                            :
                            <View style={{ height: 100, width: width - 20, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 15 }}>{userdata.name}</Text>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 15 }}>{userdata.email}</Text>
                            </View>
                    }
                </View>
                {/* <BottomTab page={'Profile'} /> */}
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