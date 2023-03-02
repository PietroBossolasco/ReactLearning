import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';

const url = "http://192.168.1.125:1337/api/"

export default function App() {
  let [res, setRes] = useState('')

  const request = () => {
    axios.post(url + 'testPost', {
      data : 'Vado a fare in culo'
    })
    .then((response) => {
      setRes(response)
    })
    .catch((error) => {
      setRes(error.toString())
    })
  }

  return (
    <View style={styles.container}>
      <Button title='Send Request' style={ res != '' ? {display: 'none'} : {display : 'block'}} onPress={request} />
      <Text>{ res }</Text>
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
});
