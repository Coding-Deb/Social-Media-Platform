import { Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

import { firebase } from '../../Firebase/config'


export default function SplashScreen() {
  const navigation = useNavigation()

  const [islogged, setIslogged] = useState(null)

  useEffect(() => {
    const checklogin = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setIslogged(user)
          // console.log(user)
        }
        else {
          setIslogged(null)
          console.log('No User Logged In')
        }
      })
    }
    checklogin()
  }, [])

  // const Logout = () => {
  //   firebase.auth().signOut()
  //     .then(() => {
  //       setIslogged(null)
  //       console.log('Logged Out Successfully')
  //       navigation.navigate('Splash')
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  return (
    <View style={styles.container}>
      <View style={{ height: height, width: width, alignItems: 'center' }}>
        <View style={{ height: 3 / 4 * height, width: width, alignItems: 'center', justifyContent: 'center', }}>
          <Image
            source={require('../../../assets/ALL_iMAGE/AVIDA_SHOP.jpg')}
            style={{ height: 330, width: 330, borderRadius: 200 }}
            resizeMode='center'
          />
        </View>
        {
          islogged === null ?
            <View style={{ height: 1 / 4 * height, width: width, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
              <Pressable style={{ height: 70, width: 1 / 2.5 * width, justifyContent: 'center', alignItems: 'center', margin: 15, padding: 15, backgroundColor: '#0E8F61', borderRadius: 30, }}
                onPress={() => { navigation.navigate('Login') }}
              >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                  Login
                </Text>
              </Pressable>
              <Pressable style={{ height: 70, width: 1 / 2.5 * width, justifyContent: 'center', alignItems: 'center', margin: 15, padding: 15, backgroundColor: '#0E8F61', borderRadius: 30, }}
                onPress={() => { navigation.navigate('Register') }}
              >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                  Register
                </Text>
              </Pressable>
            </View>
            :
            <View style={{ height: 1 / 4 * height, width: width, alignItems: 'center', justifyContent: 'center', }}>
              <Pressable style={{ height: 70, width: width - 50, justifyContent: 'center', alignItems: 'center', margin: 15, padding: 15, backgroundColor: '#0E8F61', borderRadius: 30, }}
                onPress={() => { navigation.navigate('Main') }}
              >
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                  Go To Home
                </Text>
              </Pressable>
            </View>
        }
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