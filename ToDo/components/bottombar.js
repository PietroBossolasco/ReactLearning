import React, { useState } from 'react';
import { StyleSheet, Button, View, TouchableOpacity, Image } from 'react-native';

export default function Bottombar() {
    return (
        <View style={styles.bottombar}>
            <View style={styles.element}>
                <Image style={styles.img} source={require('../img/home.svg')} />
            </View>
            <View style={styles.element}>
                <Image style={styles.img} source={require('../img/bar-chart-2.svg')} />
            </View>
            <View style={styles.element}>
                <Image style={styles.img} source={require('../img/user.svg')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottombar: {
        position: 'absolute',
        bottom: 20,
        width: '80%',
        marginLeft: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#FFF",
        backgroundColor: "#FFF",
        shadowColor: "#000000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 2.54,
        elevation: 3
    },
    element: {
        // backgroundColor : "#000",
        width: 40,
        height: 40,
    },
    img: {
        marginTop: 5,
        width: 30,
        height: 30
    }
})