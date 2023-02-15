import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Dimensions, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import position, { changePosition } from '../components/position';

export default function Searchbar() {

    const [load, setLoad] = useState(false)
    const [data, setData] = useState(null);
    const [position, setPosition] = useState(null);

    async function requireData() {
        const response = axios
            .get('https://pietrobossolasco.altervista.org/comuni.json').then(
                function (response) {
                    setData(JSON.stringify((response).data))
                    setLoad(true);
                }
            )
    }

    let array = [];

    if (load) {
        for (let item of JSON.parse(data)) {
            array.push(item.nome);
        }


        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholderTextColor="#FFF" placeholder='🔍︎ Position' onChangeText={(value) => { searchPosition(value) }} />
                <View style={styles.wrap}>
                    <FlatList
                        data={position}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => { editPosition(item) }}>
                                <Text style={styles.txt}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        )

        function searchPosition(text) {
            if (text.length < 3) {
                setPosition(null)
            }
            else {
                let temp = [];
                let j = 0;
                let i = 0;

                while (i < array.length && j < 3) {
                    if (array[i].toLowerCase().includes(text.toLowerCase())) {
                        temp.push(array[i]);
                        j++;
                    }
                    i++;
                }

                setPosition(temp)
            }
        }
    }

    requireData();

    function editPosition(value) {
        changePosition(value)
        console.log(position[0])
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
    },
    input: {
        height: 40,
        color: "white",
        fontSize: 17,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 20,
        marginRight: 20,
        borderBottomWidth: 1,
        fontFamily: "raleway-regular",
        // borderTopWidth : 1,
        borderBottomColor: "white",
        // borderTopColor : "white"
    },
    txt: {
        color: "black",
        fontSize: 17,
        marginLeft: 20,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 20,
        fontFamily: "raleway-regular",
    },
    wrap: {
        backgroundColor: "#FFF",
        position: 'absolute',
        top: 70,
        zIndex: 2,
        width: Dimensions.get('window').width - 40,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
    }
})