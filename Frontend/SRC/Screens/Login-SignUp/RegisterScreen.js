import { Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import { firebase } from '../../Firebase/config'

export default function RegisterScreen() {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')

  const Submit = () => {

    try {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((usercred) => {
          // console.log(usercred.user.uid);
          console.log('User Created successfully')
          if (usercred.user.uid) {
            const user = firebase.firestore().collection('User')
            user.add({ name: name, email: email, password: password, uid: usercred.user.uid })
            navigation.navigate('Login')
          }
        })
        .catch((error) => {
          console.log('User Already Registered')
          navigation.navigate('Register')
        })
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('../../../assets/ALL_iMAGE/AVIDA_SHOP2.jpg')}
            style={{ height: 150, width: 150, marginTop: 60, borderRadius: 200 }}
            resizeMode='contain'
          />
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 17, color: '#0E8F61', paddingBottom: 12 }}>
            AVIDA SHOP
          </Text>
        </View>
        <View style={{ borderColor: '#0E8F61', borderWidth: 1, width: width, margin: 17 }}>

        </View>
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 15, color: '#0E8F61', }}>
            Register
          </Text>
          <TextInput
            style={{ height: 50, width: width - 30, borderBottomColor: '#0E8F61', borderBottomWidth: 2, fontSize: 17, fontWeight: 'bold', margin: 12, padding: 12, color: '#0E8F61' }}
            placeholder='Enter Your Name'
            value={name}
            onChangeText={(text) => { setName(text) }}
          />
          <TextInput
            style={{ height: 50, width: width - 30, borderBottomColor: '#0E8F61', borderBottomWidth: 2, fontSize: 17, fontWeight: 'bold', margin: 12, padding: 12, color: '#0E8F61' }}
            placeholder='Enter Your Email'
            keyboardType='email-address'
            value={email}
            onChangeText={(text) => { setEmail(text) }}
          />
          <TextInput
            style={{ height: 50, width: width - 30, borderBottomColor: '#0E8F61', borderBottomWidth: 2, fontSize: 17, fontWeight: 'bold', margin: 12, padding: 12, color: '#0E8F61' }}
            placeholder='Enter Your Password'
            value={password}
            onChangeText={(text) => { setPassword(text) }}
          />

          <TextInput
            style={{ height: 50, width: width - 30, borderBottomColor: '#0E8F61', borderBottomWidth: 2, fontSize: 17, fontWeight: 'bold', margin: 12, padding: 12, color: '#0E8F61' }}
            placeholder='Enter Your Conform Password'
            value={cpassword}
            onChangeText={(text) => { setCpassword(text) }}
          />
          <Pressable style={{ height: 60, width: width - 40, margin: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0E8F61', marginTop: 20 }}
            onPress={() => { Submit() }}
          >
            <Text style={{ fontSize: 22, fontWeight: '700', color: 'white' }}>
              REGISTER
            </Text>
          </Pressable>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#0E8F61', marginTop: 12, padding: 12 }}>
            Already Have Account?
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '700', color: '#0E8F61', marginBottom: 17, padding: 12 }}
            onPress={() => { navigation.navigate('Login') }}
          >
            Sign In Here
          </Text>
        </View>
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
    // borderColor: 'black', borderWidth: 2,
  },
})