import { StatusBar } from 'expo-status-bar';
import React, { setState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import Card from './components/card.js';
import itemPrint from './components/TodoItem.js';
import TodoItem from './components/TodoItem.js';

class App extends React.Component {
  state = {
    data: null,
  };

  componentDidMount() {
    axios
      .get('https://raw.githubusercontent.com/matteocontrini/comuni-json/master/comuni.json')
      .then(response => {
        let temp = [];

        for (let item of response.data) {
          temp.push(item);
        }

        this.setState({ data: temp });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Italian municipalities</Text>
        {
          this.state.data ? (
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <TodoItem data={item} />
              )}
            />
          ) : (
            <Text>Loading...</Text>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    fontSize : 24
  }
});

export default App;
