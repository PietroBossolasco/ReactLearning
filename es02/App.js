import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('shauni');
  const [age, setAge] = useState(30);
  const [person, setPerson] = useState({name : name, age : age});

  const clickHandler = () => {
    setName();
    setPerson({name: "Effe", age : 34})
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Enter name:</Text>
        <TextInput style={styles.input} placeholder='e.g. John Doe' onChangeText={(value) => {setName(value)}}/>
        <Text style={styles.text}>Enter age:</Text>
        <TextInput keyboardType='numeric' style={styles.input} placeholder='e.g. 99' onChangeText={(value) => {setAge(value)}}/>
      </View>

      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
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
  buttonContainer: {
    marginTop: 20,
    backgroundColor: "#4900FF",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#777",
    padding: 8,
    // margin : 10,
    width : "80%"
  },
  form : {
    paddingLeft : '10%',
    alignItems : 'flex-start',
    width: '100%',
    marginTop : 10
  },
  text : {
    marginTop : 10
  }
});