import * as yup from 'yup';
import { Formik, FormikProps, Form, Field } from 'formik';

import React, { Component, Fragment } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

// ExcerciseForm form is builder for Training Days
// Training Days consist of Title, Order, ExcerciseName, Weights, Sets, Reps

export default class ExcerciseForm extends Component {
    submitDone = (values) => {
        this.props.trainingDayLiftUp(values.excerciseName, values.weight, values.sets, values.reps, values.pause);
        console.log(`These are PROPS. excerciseName: ${this.props.excerciseName}
        weight: ${this.props.weight} sets:${this.props.sets}
        reps: ${this.props.reps} pause: ${this.props.pause}`);
    };

    nextDay = () => {
        console.log('these goes to next training day');
    }

    render() {
        const { formContainer, inputContainer, inputArea, buttonContainer, headerText, superButton } = styles;
        return (
            <Fragment>
                <Formik
                    initialValues={{ excerciseName: '', pause: 120 }}
                    onSubmit={values => this.submitDone(values)}
                    validationSchema={yup.object().shape({
                        excerciseName: yup
                            .string()
                            .max(10, 'Too long! Make name that is under 11chars')
                            .required('Excercise`s name is required. '),
                        weight: yup
                            .number()
                            .positive()
                            .float(),
                        sets: yup
                            .number()
                            .positive()
                            .min(1)
                            .integer(),
                        reps: yup
                            .number()
                            .positive()
                            .min(1)
                            .integer(),
                        pause: yup
                            .number()
                            .positive(),
                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <View style={formContainer}>
                            <Text style={headerText}>First training day</Text>
                            <View style={inputContainer}>
                                <Text>Name of the excercise?*</Text>
                                <TextInput
                                    style={inputArea}
                                    value={values.excerciseName}
                                    keyboardType={'default'}
                                    onChangeText={handleChange('excerciseName')}
                                    onBlur={() => setFieldTouched('excerciseName')}
                                    placeholder="Give name for your workout"
                                />
                                {touched.excerciseName && errors.excerciseName &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.excerciseName}</Text>
                                }
                            </View>
                            <View style={inputContainer}>
                                <Text>What is the starting weight?</Text>
                                <TextInput
                                    style={inputArea}
                                    value={`${values.weight}`}
                                    keyboardType={'numeric'}
                                    onChangeText={handleChange('weight')}
                                    placeholder="weight?"
                                    onBlur={() => setFieldTouched('weight')}
                                />
                                {touched.weight && errors.weight &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.weight}</Text>
                                }
                            </View>
                            <View style={inputContainer}>
                                <Text>How many sets?</Text>
                                <TextInput
                                    style={inputArea}
                                    value={`${values.sets}`}
                                    keyboardType={'numeric'}
                                    onChangeText={handleChange('sets')}
                                    placeholder={'Sets'}
                                    onBlur={() => setFieldTouched('sets')}
                                />
                                {touched.sets && errors.sets &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.sets}</Text>
                                }
                            </View>
                            <View style={inputContainer}>
                                <Text>How many reps?</Text>
                                <TextInput
                                    style={inputArea}
                                    value={`${values.reps}`}
                                    keyboardType={'numeric'}
                                    onChangeText={handleChange('reps')}
                                    placeholder={'reps'}
                                    onBlur={() => setFieldTouched('reps')}
                                />
                                {touched.reps && errors.reps &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.reps}</Text>
                                }
                            </View>

                            <View style={inputContainer}>
                                <Text>How long pause between sets?</Text>
                                <TextInput
                                    style={inputArea}
                                    value={`${values.pause}`}
                                    keyboardType={'numeric'}
                                    onChangeText={handleChange('pause')}
                                    placeholder={'pause'}
                                    onBlur={() => setFieldTouched('pause')}
                                />
                                {touched.pause && errors.pause &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.pause}</Text>
                                }
                            </View>
                            <View style={buttonContainer}>
                                <Button
                                    title='Next excercise!'
                                    disabled={!isValid}
                                    onPress={handleSubmit}
                                    type="outline"
                                    style={superButton}
                                />
                                <Button
                                    title='Next training day!'
                                    disabled={!isValid}
                                    onPress={this.nextDay}
                                    type="outline"
                                    style={superButton}
                                />
                            </View>
                        </View>
                    )}
                </Formik>
            </Fragment>
        );
    }
}
