import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import axios from 'axios';
import position from '../components/position';

export default function Today() {
    const [load, setLoad] = useState(false)
    const [data, setData] = useState(null);

    async function requireData() {
        const response = axios
            .get('http://api.weatherapi.com/v1/forecast.json?key=04859fec227b4f7db0a142925231202&q=' + position()).then(
                function (response) {
                    setData(JSON.stringify((response).data))
                    setLoad(true);
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
        let array = [];

        for (let item of JSON.parse(data).forecast.forecastday[0].hour) {
            console.log(item.time.substring(11, 13) + "----" + item.condition.text + "----" + item.is_day)

            if (item.condition.text == "Clear" && item.is_day == 0)
                item.condition.icon = require('../image/icon/moon.png')
            else if (item.condition.text == "Clear" && item.is_day == 1)
                item.condition.icon = require('../image/icon/sun.png')
            else if (item.condition.text == "Sunny")
                item.condition.icon = require('../image/icon/sun.png')
            else if (item.condition.text == "Partly cloudy" && item.is_day == 0)
                item.condition.icon = require('../image/icon/cloudyNight.png');
            else if (item.condition.text == "Cloudy")
                item.condition.icon = require('../image/icon/cloudyDay.png')
            else if (item.condition.text == "Partly cloudy" && item.is_day == 1)
                item.condition.icon = require('../image/icon/partlyCloudy.png')
            else if (item.condition.text == "Overcast" || item.condition.text.includes('rain'))
                item.condition.icon = require('../image/icon/rain.png')
            else if (item.condition.text.includes('snow'))
                item.condition.icon = require('../image/icon/snow.png')
            else
                item.condition.icon = require('../image/icon/sun.png')

            array.push(item);
        }

        return (
            <View style={styles.main}>
                <Text style={styles.title}>Today</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <FlatList
                        horizontal
                        data={array}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={styles.hour}>{item.time.substring(11, 13)}</Text>
                                <Image source={item.condition.icon} style={{ width: 50, height: 50 }} />
                                <Text style={styles.temp}>{item.temp_c}°C</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 26,
        fontFamily: 'raleway-regular',
        marginBottom: 20,
        marginLeft: 30
    },
    main: {
        width: '100%',
        flex: 1,
        backgroundColor: '#49A0FF',
        textAlign: 'left',
        paddingTop: 20,
    },
    item: {
        backgroundColor: '#ffffff30',
        width: 120,
        height: 140,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    hour: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'raleway-regular',
        marginTop: 10,
        marginBottom: 10
    },
    temp: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'raleway-bold',
        marginTop: 10,
        marginBottom: 10,
    }
})  