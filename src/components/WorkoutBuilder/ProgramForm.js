import * as yup from 'yup'
import { Formik, FormikProps, Form, Field } from 'formik';

import React, { Component, Fragment } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';
// import InputField from './InputField';

// ProgramForm is for ProgramName, Goal, StartingDate, EndingDate and Streak
// ProgramForm leads to ExcerciseForm

export default class ProgramForm extends Component {
    submitDone = (values) => {
        // Lift state up to Forms component
        this.props.programNameLiftUp(values.programName, values.goal, values.startingDate, values.endingDate, values.streakForWeek);
        console.log(`These are programPROPS. 
        programName: ${this.props.programName} 
        goal: ${this.props.goal}`);

        // Change screen to Excercise Creation
        this.props.handleExcerciseCreation();
    };

    render() {
        const { formContainer, inputContainer, inputArea, buttonContainer, headerText, superButton } = styles;
        const programName = programName;
        return (
            <Fragment>
                <Formik
                    initialValues={{ programName: '', startingDate: (new Date()).toLocaleDateString('fi-FI') }}
                    onSubmit={values => this.submitDone(values)}
                    validationSchema={yup.object().shape({
                        programName: yup
                            .string()
                            .max(20, 'Name is too long! Maximum is 20 characters.')
                            .required('Name is required'),
                        goal: yup
                            .string(),
                        startingDate: yup
                            .date()
                            .default(() => (new Date()).toLocaleDateString('fi-FI'))
                            .min((new Date()).toLocaleDateString('fi-FI'), 'You cant start before today!'),
                        endingDate: yup
                            .date(),
                        streakForWeek: yup
                            .number()
                            .positive()
                            .min(1),
                    })}
                >
                    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <View style={formContainer}>
                            <Text style={headerText}>Workout plan builder</Text>
                            {/* <InputField programName={programName} /> */}
                            <View style={inputContainer}>
                                <Text>Program's name*:</Text>
                                <TextInput
                                    style={inputArea}
                                    value={values.programName}
                                    keyboardType={'default'}
                                    disabled={isValid}
                                    onChangeText={handleChange('programName')}
                                    onBlur={() => setFieldTouched('programName')}
                                    placeholder="Give name for your workout"
                                />
                                {touched.programName && errors.programName &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.programName}</Text>
                                }
                            </View>
                            <View style={inputContainer}>
                                <Text>Goal:</Text>
                                <TextInput
                                    style={inputArea}
                                    value={values.goal}
                                    keyboardType={'default'}
                                    onChangeText={handleChange('goal')}
                                    placeholder="What is your goal?"
                                    onBlur={() => setFieldTouched('goal')}
                                />
                                {touched.goal && errors.goal &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.goal}</Text>
                                }
                            </View>
                            <View style={inputContainer}>
                                <Text>Starting Date:</Text>
                                <TextInput
                                    style={inputArea}
                                    value={`${values.startingDate}`}
                                    keyboardType={'numeric'}
                                    onChangeText={handleChange('startingDate')}
                                    placeholder={(new Date()).toLocaleDateString('fi-FI')}
                                    onBlur={() => setFieldTouched('startingDate')}
                                />
                                {touched.startingDate && errors.startingDate &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.startingDate}</Text>
                                }
                            </View>
                            <View style={inputContainer}>
                                <Text>Ending Date:</Text>
                                <TextInput
                                    style={inputArea}
                                    value={`${values.endingDate}`}
                                    keyboardType={'numeric'}
                                    onChangeText={handleChange('endingDate')}
                                    placeholder={'Till what day you keep doing this?'}
                                    onBlur={() => setFieldTouched('endingDate')}
                                />
                                {touched.endingDate && errors.endingDate &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.endingDate}</Text>
                                }
                            </View>
                            <View style={inputContainer}>
                                <Text>Streak for week:</Text>
                                <TextInput
                                    style={inputArea}
                                    value={`${values.streakForWeek}`}
                                    keyboardType={'numeric'}
                                    onChangeText={handleChange('streakForWeek')}
                                    placeholder={'How many times you will do this weekly?'}
                                    onBlur={() => setFieldTouched('streakForWeek')}
                                />
                                {touched.streakForWeek && errors.streakForWeek &&
                                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.streakForWeek}</Text>
                                }
                            </View>
                            <View style={buttonContainer}>
                                <Button
                                    title='Next!'
                                    disabled={!isValid}
                                    onPress={handleSubmit}
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
