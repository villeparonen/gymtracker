import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { connect, getIn } from 'formik';
import styles from './styles';

// All FormikProps available on props.formik!

function InputField(props) {
    const { inputContainer, inputArea } = styles;
    const inputName = props.inputName;
    return (
        <View style={inputContainer}>
            <Text>Program's name*:</Text>
            <TextInput
                style={inputArea}
                value={props.formik.values.programName}
                keyboardType={'default'}
                disabled={props.formik.isValid}
                onChangeText={props.formik.handleChange(`${inputName}`)}
                onBlur={() => props.formik.setFieldTouched(`${inputName}`)}
                placeholder="Give name for your workout"
            />
            {props.formik.touched.programName && props.formik.errors.programName &&
                <Text style={{ fontSize: 10, color: 'red' }}>{props.formik.errors.programName}</Text>
            }
        </View>
    );
}

export default InputField;
