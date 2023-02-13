import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import Home from "./pages/home.js";

export default function App() {
  let [fontsLoaded] = useFonts({
    'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
    'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'raleway-thin': require('./assets/fonts/Raleway-Thin.ttf'),
  })

  if (!fontsLoaded) {
    <View>

    </View>
  }
  else {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // width : '100%',
    // height : '100%'
  },
});
