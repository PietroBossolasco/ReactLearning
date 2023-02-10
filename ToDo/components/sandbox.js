import React from "react"
import { StyleSheet, Text, View } from 'react-native';

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex : 1,
        justifyContent: 'center',
        paddingTop: 40,
        alignItems : 'flex-end',
        flexDirection: 'row',
        justifyContent : 'space-around',
        backgroundColor: '#ddd'
    },
    boxOne: {
        flex : 2,
        backgroundColor: 'violet',
        padding: 10
    },
    boxTwo: {
        flex : 1,
        backgroundColor: 'gold',
        padding: 20
    },
    boxThree: {
        flex : 1,
        backgroundColor: 'coral',
        padding: 30
    },
    boxFour: {
        flex : 1,
        backgroundColor: 'skyblue',
        padding: 40
    }
})