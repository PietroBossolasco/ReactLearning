import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Dimensions } from 'react-native';

export default function Searchbar() {
    function searchPosition(text){
        console.log(text)
        if(text.length < 3){
            console.log("no ricerca")
        }
        else{
            console.log("Ricerca")
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholderTextColor="#FFF" placeholder='🔍︎ Posizione' onKeyPress={() => { 
                 searchPosition(text);
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width: Dimensions.get('window').width,
    },
    input : {
        height : 40,
        color : "white",
        fontSize : 17,
        marginLeft : 20,
        marginTop : 10,
        marginBottom : 20,
        marginRight : 20,
        borderBottomWidth : 1,
        // borderTopWidth : 1,
        borderBottomColor : "white",
        // borderTopColor : "white"
    }
})