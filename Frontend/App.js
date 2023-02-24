import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './SRC/Screens/Login-SignUp/LoginScreen';
import RegisterScreen from './SRC/Screens/Login-SignUp/RegisterScreen';
import SplashScreen from './SRC/Screens/Login-SignUp/SplashScreen';
import ChatScreen from './SRC/Screens/MainScreen/Chat/ChatScreen';
import DetailScreen from './SRC/Screens/MainScreen/Home/DetailScreen';
import ProfileScreen from './SRC/Screens/MainScreen/Home/ProfileScreen';
import MainScreen from './SRC/Screens/MainScreen/Home/MainScreen';
import NotificationScreen from './SRC/Screens/MainScreen/Notification/NotificationScreen';
import SettingScren from './SRC/Screens/MainScreen/Setting/SettingScren';
import Statedata from './SRC/Context/State';
// import ChangeName from './SRC/Screens/MainScreen/Setting/ChangeName';
import ChangeUserDetails from './SRC/Screens/MainScreen/Setting/ChangeUserDetails';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Statedata>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
          <Stack.Screen name='Login' component={LoginScreen} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name='Splash' component={SplashScreen} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name='Register' component={RegisterScreen} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name='Main' component={MainScreen} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name='Detail' component={DetailScreen} options={{ animation: 'slide_from_left' }} />
          <Stack.Screen name='Profile' component={ProfileScreen} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name='Chat' component={ChatScreen} options={{ animation: 'slide_from_bottom' }} />
          <Stack.Screen name='Notification' component={NotificationScreen} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name='Setting' component={SettingScren} options={{ animation: 'slide_from_right' }} />
          {/* <Stack.Screen name='ChangeUserName' component={ChangeName} options={{ animation: 'slide_from_right' }} /> */}
          <Stack.Screen name='ChangeUserDetails' component={ChangeUserDetails} options={{ animation: 'slide_from_right' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Statedata>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
