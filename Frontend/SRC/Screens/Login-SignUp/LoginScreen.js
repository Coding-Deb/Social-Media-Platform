import { Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
 
import { firebase } from '../../Firebase/config'

export default function LoginScreen() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const Submit = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        const User = res.user
        console.log('Login Successfully with email ' + email)
        // console.log(User);
        navigation.navigate('Splash')
      })
      .catch((err) => {
        console.log(err)
        navigation.navigate('Login')
      })
  }

  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={require('../../../assets/ALL_iMAGE/AVIDA_SHOP2.jpg')}
            style={{ height: 170, width: 170, margin: 17, borderRadius: 200 }}
            resizeMode='contain'
          />
          <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 17, color: '#0E8F61', paddingBottom: 20 }}>
            AVIDA SHOP
          </Text>
        </View>
        <View style={{ borderColor: '#0E8F61', borderWidth: 1, width: width, margin: 17 }}>

        </View>
        <View style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', margin: 15, color: '#0E8F61', }}>
            Login Here
          </Text>
          <TextInput
            style={{ height: 70, width: width - 30, borderBottomColor: '#0E8F61', borderBottomWidth: 2, fontSize: 20, fontWeight: 'bold', margin: 15, padding: 15, color: '#0E8F61' }}
            placeholder='Enter Your Email Address'
            keyboardType='email-address'
            value={email}
            onChangeText={(txt) => { setEmail(txt) }}
          />
          <TextInput
            style={{ height: 70, width: width - 30, borderBottomColor: '#0E8F61', borderBottomWidth: 2, fontSize: 20, fontWeight: 'bold', margin: 15, padding: 15, color: '#0E8F61' }}
            placeholder='Enter Your Password'
            value={password}
            onChangeText={(txt) => { setPassword(txt) }}
          />
          <Pressable style={{ height: 60, width: width - 40, margin: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0E8F61', marginTop: 20 }}
            onPress={() => { Submit() }}
          >
            <Text style={{ fontSize: 22, fontWeight: '700', color: 'white' }}>
              LOGIN
            </Text>
          </Pressable>
          <Text style={{ fontSize: 18, fontWeight: '700', color: '#0E8F61', marginTop: 15, padding: 12 }}>
            Don't Have Account?
          </Text>
          <Text style={{ fontSize: 16, fontWeight: '700', color: '#0E8F61', marginBottom: 15, padding: 12 }}
            onPress={() => { navigation.navigate('Register') }}
          >
            Sign Up Here
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