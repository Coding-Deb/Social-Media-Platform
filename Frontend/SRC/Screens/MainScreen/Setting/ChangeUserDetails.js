import { Dimensions, StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../../Components/Header'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import { firebase } from '../../../Firebase/config'
import { useNavigation } from '@react-navigation/native'

export default function ChangeUserDetails() {
    const [userlogged, setUserlogged] = useState(null);
    const [userdata, setUserdata] = useState('');
    const navigation = useNavigation()

    useEffect(() => {
        const checklogin = () => {
            firebase.auth().onAuthStateChanged((user) => {
                // console.log(user);
                if (user) {
                    // navigation.navigate('home');
                    setUserlogged(user.uid);
                } else {
                    // No user is signed in.
                    console.log('no user');
                }
            });
        }
        checklogin();
    }, [])

    const getuserdata = async () => {
        const docRef = firebase.firestore().collection('UserData').where('uid', '==', userlogged)
        const doc = await docRef.get();
        if (!doc.empty) {
            doc.forEach((doc) => {
                setUserdata(doc.data());
            })
        }
        else {
            console.log('no user data');
        }
    }

    useEffect(() => {

        getuserdata();
    }, [userlogged]);


    const [edit, setEdit] = useState(false);
    const [newname, setNewName] = useState('');
    const [newaddress, setNewAddress] = useState('');

    const updateuser = async () => {
        const docRef = firebase.firestore().collection('User').where('uid', '==', userlogged)
        const doc = await docRef.get();
        if (!doc.empty) {
            if (newname !== '') {
                doc.forEach((doc) => {
                    doc.ref.update({
                        name: newname
                    })
                })
            }
            getuserdata();
            setNewName('')
            navigation.navigate('Setting')
        }
        else {
            console.log('no user data');
        }
    }

   


    return (
        <View style={styles.container}>
            <Header page={'ChangeDetails'} />
            <View style={{ height: height, width: width, alignItems: 'center', justifyContent: 'center' }}>

                <TextInput
                    placeholder='Enter Your New UserName'
                    value={newname}
                    onChangeText={(txt) => { setNewName(txt) }}
                    style={{ height: 55, width: width - 50, justifyContent: 'center', padding: 12, borderColor: 'black', borderWidth: 2, margin: 20, fontSize: 20, fontWeight: '700' }}
                />
                <Pressable style={{ height: 70, width: 1 / 2 * width + 10, alignItems: 'center', justifyContent: "center", backgroundColor: '#088F8F', borderRadius: 20, margin: 20 }}
                    onPress={() => { Submit() }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                        Update
                    </Text>
                </Pressable>
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