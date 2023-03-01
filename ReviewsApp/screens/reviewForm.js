import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { globalStyles } from "../styles/global";
import { Formik } from 'formik';
import * as yup from 'yup'

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().min(8).required(),
    rating: yup.number().test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
})

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={
                    (values, actions) => {
                        actions.resetForm()
                        addReview(values)
                    }
                }
            >
                {(props) => (
                    <View>
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />

                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}                           
                            onBlur={props.handleBlur('body')}
                        />

                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                        <TextInput
                            keyboardType='numeric'
                            style={globalStyles.input}
                            placeholder='Rating (1 - 5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            onBlur={props.handleBlur('rating')}
                        />

                        <Button title="Submit" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}