import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, ActivityIndicator, AppBar, IconButton } from '@react-native-material/core';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <>
      <AppBar
        leading={
          props =>
            <IconButton
              icon={
                props =>
                  <MaterialIcons name='menu' size={30} color='white' />
              }
              {...props}
            />
        }
        color='#4960FF'
        title='Material UI'
        style={{ paddingTop: 20 }}
      />

      <View style={styles.container}>
        <ActivityIndicator color='#4960FF' size='large' style={{ width: 100, height: 100 }} />
        <Button title='Click me' onPress={() => alert('Sooca')} />
      </View>
    </>
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
