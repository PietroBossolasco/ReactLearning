import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, ActivityIndicator, AppBar, IconButton, Avatar, Backdrop, Badge, FAB, Snackbar, ListItem } from '@react-native-material/core';
import { MaterialIcons } from '@expo/vector-icons';


export default function App() {
  const [visibility, setVisible] = useState(true);

  return (
    <>
      <Backdrop
        header={
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
            trailing={
              props =>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 100 }}>
                  <Badge label={'4 +'} color="#490099" />
                  <Avatar label="Henry Ford" autoColor size={40} style={{ marginRight: 20 }} />
                </View>
            }
            color='#4960FF'
            title='Material UI'
            style={{ paddingTop: 30, height: 150 }}
          />
        }
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Lorem ipsum!</Text>
            <Text style={{ padding: 20 }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Text>

            <Text style={styles.title}>List</Text>
            
            <ListItem 
              style={{color: 'black', margin: 10}}
              secondaryText='Page 1'
              trailing={props => <MaterialIcons name='chevron-right' {...props} />}
            />

            <Button style={{ marginBottom: 20 }} title='Click me' variant='outlined' onPress={() => setVisible(true)} trailing={(props) => <MaterialIcons name="check" {...props} />} />
            {/* <ActivityIndicator color='#4960FF' size='large' style={{ width: 100, height: 100 }} /> */}
            <FAB icon={props =>
              <MaterialIcons name='navigation' {...props} />
            }
              color='primary'
            />
            <Snackbar
              message="Note archived."
              action={<Button variant="text" title="Dismiss" color="#BB86FC" compact onPress={() => setVisible(false)} />}
              style={visibility ? { position: 'absolute', start: 16, end: 16, bottom: 16, } : { display: 'none' }}
            />
          </View>
        </ScrollView>
      </Backdrop>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
    marginTop: 20
  }
});
