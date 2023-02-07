import React from 'react';
import { StyleSheet, Text, Alert } from 'react-native';

export default function TodoItem({ data }){
    function press(){
        Alert.alert("Info", "Cap: " + data.cap[0] + "\nNome: " +data.nome + "\nPopolazione: " + data.popolazione + "\nProvincia di " + data.provincia.nome,  [
            {text: 'Ok!', onPress: () => console.log("Alert closed")}])
    }

    return(
        <Text style={styles.item} onPress={press}>{data.nome}</Text>
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