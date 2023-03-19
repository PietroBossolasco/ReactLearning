import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('name')
      if (value !== null) {
        setName(value)
      }
    } catch (e) {
    }
    return null
  }

  let inputname = "";


  const changeHandler = (value) => {
    setText(value)
  }

  getData();

  return (
    <View style={styles.container}>
      <Text>Il tuo nome è {name} </Text>

      <View style={{ flexDirection: 'row', }}>
        <TextInput placeholder='Inserisci il tuo nome' style={styles.input} onChangeText={changeHandler} />
        <Button title='Salva' style={styles.button} onPress={() => {
          AsyncStorage.setItem('name', text );
          getData();
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  }
});
