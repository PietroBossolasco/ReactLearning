import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        height : 80,
        paddingTop : 38,
        backgroundColor : "#4960FF"
    },
    title: {
        color : "#FFF",
        fontSize : 20,
        fontWeight : "bold",
        paddingLeft : 40
    }
})