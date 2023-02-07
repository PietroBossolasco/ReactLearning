import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

export default function ActualWeather( { position } ) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.img} source={require('../image/map-pin.png')} resizeMode={'cover'} resizeMethod={'resize'}/>
                <Text style={styles.position}>{position}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : Dimensions.get('window').width,
    },
    row : {
        flexDirection : 'row',
        alignContent : 'flex-start',
        paddingLeft : 30
    },
    img : {
        height : 40,
        width : 40,
    },
    position : {
        color: 'white',
        lineHeight : 40,
        marginLeft : 20,
        fontSize : 40,
        marginTop : 5
    }
})