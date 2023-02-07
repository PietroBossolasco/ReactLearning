import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function TodoItem({ data }){
    return(
        <Text style={styles.item}>{data}</Text>
    )
}

const styles = StyleSheet.create({
    item : {
        padding : 10,
        width : '100%',
        marginTop : 10,
        borderColor : "#bbb",
        borderBottomWidth : 1,
        // borderWidth : 1,
        borderStyle : "dashed",
        borderRadius : 10
    }
})