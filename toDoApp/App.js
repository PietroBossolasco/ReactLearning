import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header.js'
import TodoItem from './components/TodoItem.js'
import AddTodo from './components/addTodo.js'

export default function App() {
  const [todos, setToDos] = useState([
    { text: 'Buy coffee', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'Play on the switch', key: '3' },
  ])

  const pressHandler = (key) => {
    setToDos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    setToDos((prevTodos) => {
      return [
        { text: text, key: Math.random.toString() },
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
