import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainRoutes from './src/routers/MainRoutes/Index'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import { store } from './src/store'



export default function App() {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainRoutes />
      </NavigationContainer>
    </Provider>
  )
}