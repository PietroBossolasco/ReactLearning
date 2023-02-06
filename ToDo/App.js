import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header.js'
import TodoItem from './components/TodoItem.js'
import AddTodo from './components/addTodo.js'
import Bottombar from './components/bottombar.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [todos, setToDos] = useState(
    [
      { text: 'Buy coffee', key: '1' },
      { text: 'Create an app', key: '2' },
      { text: 'Play on the switch', key: '3' },
    ]
  )


  // const storeData = async (name, value) => {
  //   try {
  //     await AsyncStorage.setItem(name, value)
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }
  
  // const setStartItem = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("todo")
  //     console.log("Entrato")
  //     let tempvalue = JSON.parse(value)
  //     console.log(tempvalue);
  //     for(let item of tempvalue){
  //       setToDos(tempvalue)
  //       console.log(item)
  //     }
  //     console.log("Uscito")
  //   } catch (e) {
  //   }
  // }
  
  // setStartItem();
  // console.log("Uscito")

  const pressHandler = (key) => {
    setToDos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setToDos((prevTodos) => {
        // let temp = [];
        // temp = prevTodos;
        // let id = (parseInt(temp[temp.length - 1].key) + 1).toString();
        // console.log(id);
        // temp.push({ text: text, key: id });
        // storeData('todo', JSON.stringify(temp));
        return [
          {text: text, key : (parseInt(prevTodos[prevTodos.length - 1].key) + 1).toString()},
          ...prevTodos
        ]
      })
    }
    else{
      Alert.alert("Opss...", "The length of the todo must be over 3 char", [
        {text: 'Understood', onPress: () => console.log("Alert closed")}
      ])
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        {/* Header */}
        <Header />

        <View style={styles.content}>
          {/* To form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
        <Bottombar />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  text: {
    color: '#000',
    fontSize: 24
  }
});
