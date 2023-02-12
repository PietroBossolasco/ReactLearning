import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from "../styles/global";

export default function About() {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>About screen</Text>
        </View>
    )
}

const styles = globalStyles