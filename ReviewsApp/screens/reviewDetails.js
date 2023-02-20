import React from "react";
import { Text, View } from 'react-native';
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ route }) {
    let stars = route.params.rating;
    let print = ""
    for (let i = 0; i < stars; i++)
        print += "⭐"

    return (
        <View style={styles.container}>
            <Card>
                <Text style={styles.titleText}>{route.params.title}</Text>
                <Text style={styles.paragraph}>{route.params.body}</Text>
                <Text style={styles.titleText}>{print}</Text>
            </Card>
        </View>
    )
}

const styles = globalStyles