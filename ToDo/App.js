import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header.js'
import TodoItem from './components/TodoItem.js'
import AddTodo from './components/addTodo.js'
import Bottombar from './components/bottombar.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [todos, setToDos] = useState()

  // [
  //   { text: 'Buy coffee', key: '1' },
  //   { text: 'Create an app', key: '2' },
  //   { text: 'Play on the switch', key: '3' },
  // ]

  const storeData = async (name, value) => {
    try {
      await AsyncStorage.setItem(name, value)
    } catch (e) {
      console.error(e);
    }
  }
  
  const setStartItem = async () => {
    try {
      const value = await AsyncStorage.getItem("todo")
      console.log("Entrato")
      let tempvalue = JSON.parse(value)
      console.log(tempvalue);
      for(let item of tempvalue){
        setToDos(tempvalue)
        console.log(item)
      }
      console.log("Uscito")
    } catch (e) {
    }
  }
  
  setStartItem();
  console.log("Uscito")

  const pressHandler = (key) => {
    setToDos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    setToDos((prevTodos) => {
      let temp = [];
      temp = prevTodos;
      let id = (parseInt(temp[temp.length - 1].key) + 1).toString();
      console.log(id);
      temp.push({ text: text, key: id });
      storeData('todo', JSON.stringify(temp));
      return [
        ...prevTodos
      ]
    })
  }

  return (
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
