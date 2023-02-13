import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';


export default function ActualWeather({ position, data }) {
    data = JSON.parse(data)

    let iconPath = "";

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {/* <Text>{ data.current.temp_c }</Text> */}
                <View>
                    <View>
                        <Text style={styles.temperature}>{data.current.temp_c}°C</Text>
                        <Text style={styles.feels}>Feels like {data.current.feelslike_c}°C</Text>
                        <View style={styles.location}>
                            <Image style={styles.img} source={require('../image/map-pin.png')} resizeMode={'cover'} resizeMethod={'resize'} />
                            <Text style={styles.position}>{data.location.name}</Text>
                        </View>
                    </View>
                </View>
                <Image style={styles.weatherLogo} source={(iconPath != "") ? require('../image/icon/sun.png') : require("../image/icon/sun.png")} />
            </View>

            <View style={styles.row}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.miniimg} source={require('../image/icon/wind.png')} />
                    <Text style={styles.sub}>{data.current.wind_kph} Km/h</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.miniimg} source={require('../image/icon/humidity.png')} />
                    <Text style={styles.sub}>{data.current.humidity}%</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.miniimg} source={require('../image/icon/chrono.png')} />
                    <Text style={styles.sub}>{data.current.last_updated.substring(11, 16)}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    img: {
        height: 30,
        width: 30,
    },
    weatherLogo: {
        marginTop: 10,
        width: 120,
        height: 120
    },
    position: {
        fontFamily: 'raleway-regular',
        color: 'white',
        lineHeight: 30,
        marginLeft: 20,
        fontSize: 30
    },
    location: {
        flexDirection: "row",
        marginTop: 10,
    },
    temperature: {
        color: 'white',
        marginBottom: 0,
        // lineHeight: 30,
        fontSize: 45,
        fontFamily: 'raleway-bold',
    },
    feels: {
        color: 'white',
        fontFamily: 'raleway-regular',
        fontSize: 16,
        marginBottom: 10
    },
    sub: {
        color: 'white',
        fontFamily: 'raleway-regular',
        fontSize: 16,
        marginTop: 20,
        lineHeight: 20
    },
    miniimg: {
        height: 20,
        width: 20,
        marginTop: 23,
        marginRight: 10
    }
})