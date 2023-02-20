import React, { useState } from 'react';
import { useFonts } from 'expo-font'
import Loading from './screens/loading.js'
import { AppNavigator } from './routes/drawer'

export default function App() {
  let [fontsLoaded] = useFonts({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <AppNavigator />
  );
}