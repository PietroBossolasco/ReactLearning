import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView, Dimensions } from 'react-native';
import Searchbar from '../components/searchbar';
import ActualWeather from '../components/actualWeather';
import Today from '../components/today';

import axios from 'axios';
const position = "Rome";

export default function Home() {
    const [load, setLoad] = useState(false)
    const [data, setData] = useState(null);
    
    async function requireData() {
        const response = axios
            .get('http://api.weatherapi.com/v1/current.json?key=04859fec227b4f7db0a142925231202&q=' + position).then(
                function (response) {
                    setData(JSON.stringify((response).data))
                    setLoad(true)
                }
            )
    }

    requireData();

    if (!load) {
        return (
            <View style={styles.main}>
            </View>
        )
    }

    if (load) {
        return (
            <View style={styles.main}>
                {/* <Searchbar /> */}
                <ActualWeather position={position} data={data} />
                <Today />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#49A0FF',
        alignItems: "center",
        paddingTop: 40
    },
    title: {
        fontFamily: "raleway-thin",
        color: 'white',
        fontSize: 26,
    }
});