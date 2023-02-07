import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView, Dimensions } from 'react-native';
import Searchbar from '../components/searchbar';
import ActualWeather from '../components/actualWeather';

const position = "Rome";

export default function Home() {
    return (
        <ScrollView style={{flex: 1}}>
            <View style={styles.main}>
                <Searchbar />
                {/* <Text style={styles.title}>Weather</Text> */}
                <ActualWeather position={position}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#49A0FF',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height + 33,
        alignItems : "center",
        paddingTop : 40
    },
    title : {
        color: 'white',
        fontSize: 26,
    }
})