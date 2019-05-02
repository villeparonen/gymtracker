
import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, Text, View } from 'react-native';
import { Field } from 'redux-form';
import RFTextInput from '../../../RFTextInput/index';
import styles from './styles';

// The component is responsible for the form’s view
// As this component is designed to be used with Redux Form, 
// it requires a handleSubmit function property
// This handleSubmit function is passed down from the outmost component


// The <Field/> component requires two properties. 
// The name property uniquely identifies the field in the form. 
// The component property defines the component to generate a view for the field.

const ProgSelectionView = (props) => {
    const { handleSubmit, submitFailed, submitSucceeded, submitting, valid } = props;
    return (
        <View>
            <Text>What is the name of the program? </Text><Field
                name="programName"
                component={RFTextInput}
                disabled={submitting}
            />
            <Text>What is the goal of the program? </Text><Field
                name="goal"
                component={RFTextInput}
                disabled={submitting}
            />
            {!submitting && submitFailed && <Text style={styles.rootFailed}>
                Submit Failed
            </Text>}
            {!submitting && submitSucceeded && <Text style={styles.rootSucceeded}>
                Submit Succeeded
            </Text>}
            <Button
                disabled={!valid || submitting}
                onPress={handleSubmit}
                title="Next"
                color="green"
            />
        </View>
    );
};

ProgSelectionView.propTypes = {
    submitFailed: PropTypes.bool.isRequired,
    submitSucceeded: PropTypes.bool.isRequired,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
};

ProgSelectionView.defaultProps = {
    submitting: false,
};

export default ProgSelectionView;
