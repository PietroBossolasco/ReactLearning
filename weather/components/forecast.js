import React, { useState } from 'react';
import { StyleSheet, Text, FlatList, View, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import position from '../components/position';

export default function Forecast() {

    function eventListener(item){
        console.log(item)
    }

    const [load, setLoad] = useState(false)
    const [data, setData] = useState(null);

    async function requireData() {
        const response = axios
            .get('http://api.weatherapi.com/v1/forecast.json?key=04859fec227b4f7db0a142925231202&q=' + position() + '&days=7').then(
                function (response) {
                    setData(JSON.stringify((response).data))
                    setLoad(true);
                }
            )
    }

    requireData();

    if (load) {
        let array = [];

        for (let item of JSON.parse(data).forecast.forecastday) {
            let date = new Date(item.date);

            if (isToday(date))
                item.date = "TODAY";
            else
                item.date = getWeekDay(date);

            if (item.day.condition.text == "Clear")
                item.day.condition.icon = require('../image/icon/sun.png')
            else if (item.day.condition.text == "Sunny")
                item.day.condition.icon = require('../image/icon/sun.png')
            else if (item.day.condition.text == "Cloudy")
                item.day.condition.icon = require('../image/icon/cloudyDay.png')
            else if (item.day.condition.text == "Partly cloudy")
                item.day.condition.icon = require('../image/icon/partlyCloudy.png')
            else if (item.day.condition.text == "Overcast" || item.day.condition.text.includes("rain"))
                item.day.condition.icon = require('../image/icon/rain.png')
            else if (item.day.condition.text.includes('snow'))
                item.day.condition.icon = require('../image/icon/snow.png')
            else
                item.day.condition.icon = require('../image/icon/moon.png')

            array.push(item);
        }

        return (
            <View style={styles.main}>
                <Text style={styles.title}>Forecast</Text>

                <View style={styles.item}>
                    <View style={styles.left}>
                        <Text style={styles.space}></Text>
                        <Text style={styles.rightText}>DAY</Text>
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.paragr}>MIN</Text>
                        <Text style={styles.rightText}>MAX</Text>
                    </View>
                </View>

                <FlatList
                    nestedScrollEnabled
                    data={array}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => eventListener(item)}>
                            <View style={styles.item}>
                                <View style={styles.left}>
                                    <Image source={item.day.condition.icon} style={{ width: 30, height: 30 }} />
                                    <Text style={styles.rightText}>{item.date}</Text>
                                </View>
                                <View style={styles.right}>
                                    <Text style={styles.paragr}>{item.day.mintemp_c}°C</Text>
                                    <Text style={styles.rightText}>{item.day.maxtemp_c}°C</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        )


        function getWeekDay(date) {
            let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
            return days[date.getDay()];
        }

        function isToday(someDate) {
            const today = new Date()
            return someDate.getDate() == today.getDate() &&
                someDate.getMonth() == today.getMonth() &&
                someDate.getFullYear() == today.getFullYear()
        }
    }
}

const styles = StyleSheet.create({
    space:{
        width: 30,
        height: 30,
    },
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
        paddingBottom: 20
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        width: '100%',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        width: '100%',
    },
    paragr: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'raleway-regular',
        width: 50
    },
    right: {
        flexDirection: 'row'
    },
    left: {
        flexDirection: 'row'
    },
    rightText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'raleway-regular',
        marginLeft: 10,
        width: 60
    }
});