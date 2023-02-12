import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda', rating: 5, body: 'lorem ipsum', key: 1 },
        { title: 'GCTA', rating: 4, body: 'lorem ipsum', key: 2 },
        { title: 'Final Fantasy', rating: 3, body: 'lorem ipsum', key: 3 },
    ])

    return (
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home screen</Text> */}
            <FlatList
                data={reviews}
                renderItem={({ item })=>(
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}