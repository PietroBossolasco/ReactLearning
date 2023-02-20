import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 40,
        paddingTop: 40
    },
    titleText: {
        fontFamily: 'roboto-bold',
        fontSize: 18,
        color: '#333',
        // marginBottom: 20
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    }
})