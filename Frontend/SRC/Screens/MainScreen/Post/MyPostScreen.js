import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/Header'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import { firebase } from '../../../Firebase/config'
import { useNavigation } from '@react-navigation/native'

export default function MyPostScreen() {
    const [post, SetPost] = useState('')
    const navigation = useNavigation()
    const Submit = () => {
        try {
                const user = firebase.firestore().collection('Post')
                user.add({ My_Post: post, })
                console.log("Posted Successfully");
                navigation.navigate('Main')
            
        }
        catch (error) {
            console.log("Cant Post" + error.message)
        }

    }
    return (
        <View style={styles.container}>
            <Header page={'MyPost'} />
            <View style={{ height: height, width: width, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput
                    placeholder='Enter Your Text Post'
                    style={{ height: 120, width: width - 40, padding: 15, borderColor: 'black', borderWidth: 2, margin: 20, fontSize: 20, fontWeight: '900' }}
                    multiline={true}
                    value={post}
                    onChangeText={(txt) => { SetPost(txt) }}
                />
                <Pressable style={{ height: 70, width: 1 / 2 * width, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', margin: 20 }}
                    onPress={() => { Submit() }}
                >
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'white' }}>
                        Submit
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