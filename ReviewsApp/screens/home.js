import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda', rating: 5, body: 'lorem ipsum', key: 1 },
        { title: 'GCTA', rating: 4, body: 'lorem ipsum', key: 2 },
        { title: 'Final Fantasy', rating: 3, body: 'lorem ipsum', key: 3 },
    ])

    return (
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home screen</Text> */}
            <Modal visible={modalOpen} animationType='slide' >
                <MaterialIcons
                    name="close"
                    size={24}
                    style={{ ...globalStyles.modalToggle, ...style.modalClose }}
                    onPress={() => setModalOpen(false)}
                />

                <ReviewForm />
                {/* <View style={style.modalContent}>
                    <Text>Hello from the modal</Text>
                </View> */}
            </Modal>

            <MaterialIcons
                name="add"
                size={24}
                style={globalStyles.modalToggle}
                onPress={() => setModalOpen(true)}
            />


            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const style = StyleSheet.create({
    modalContent: {
        flex: 1,
        padding: 20,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
        marginLeft: 20,
    },
})