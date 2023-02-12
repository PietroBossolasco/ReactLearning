import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
    let stars = navigation.getParam('rating');
    let print = ""
    for(let i=0; i < stars; i++)
        print += "⭐"

    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>{ navigation.getParam('title') }</Text>
            <Text style={styles.paragraph}>{ navigation.getParam('body') }</Text>
            <Text style={styles.titleText}>{print}</Text>
        </View>
    )
}

const styles = globalStyles