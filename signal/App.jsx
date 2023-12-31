import React, { useState } from 'react'
import { SafeAreaView, StatusBar, Text } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import './src/core/fontawsome'

import SplashScreen from './src/screens/Splash'
import SignInScreen from './src/screens/Signin'
import SignUpScreen from './src/screens/Signup'
import SearchScreen from './src/screens/Search'
import MessagesScreen from './src/screens/Message'
import HomeScreen from './src/screens/Home'

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  }
}

const Stack = createNativeStackNavigator()

function App() {

  const [initialized] = useState(true)
  const [authenticated] = useState(false)

  return (
    <NavigationContainer theme={LightTheme}>
      <StatusBar barStyle='dark-content' />
        <Stack.Navigator>
          {!initialized ? (
          <>
            <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
          </>

          ) : !authenticated ? (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
        </>
          ): (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Messages" component={MessagesScreen} />
        </>
          )}

    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
