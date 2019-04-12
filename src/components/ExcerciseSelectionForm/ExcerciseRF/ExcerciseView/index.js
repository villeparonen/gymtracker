import { PropTypes } from 'prop-types';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { Field } from 'redux-form';
import RFTextView from '../../../RFTextInput';
import RFNumberInput from '../../../RFNumberInput';
import RFWeightsInput from '../../../RFNumberInput/weights';
import styles from './styles';

// The component is responsible for the form’s view
// As this component is designed to be used with Redux Form, 
// it requires a handleSubmit function property
// This handleSubmit function is passed down from the outmost component


// The <Field/> component requires two properties. 
// The name property uniquely identifies the field in the form. 
// The component property defines the component to generate a view for the field.

const ExcerciseView = ({
    handleSubmit,
    submitFailed,
    submitSucceeded,
    submitting,
    valid
}) => (
        <View>
            <Text>Start adding some excercises</Text>

            <Text>1. Name of the excercise? </Text><Field
                name="excerciseName" // 1. Name = String
                component={RFTextView}
                disabled={submitting}
            />
            <Text>2. What is the starting weight? </Text><Field
                name="weight"  // 2. Weight = Number
                component={RFWeightsInput}
                disabled={submitting}
            />
            <Text>3. How many sets? </Text><Field
                name="sets"  // 3. Sets = Number
                component={RFNumberInput}
                disabled={submitting}
            />
            <Text>4. How many reps? </Text><Field
                name="reps"  // 4. Reps = Number
                component={RFNumberInput}
                disabled={submitting}
            />
            {/* <Text>5. How long pause between sets? </Text><Field
                name="pause"  // 5. Pause = Minutes
                component={RFNumberInput}
                disabled={submitting}
            /> */}
            {!submitting && submitFailed && <Text style={styles.rootFailed}>
                Submit Failed
            </Text>}
            {!submitting && submitSucceeded && <Text style={styles.rootSucceeded}>
                Submit Succeeded
            </Text>}
            <Button
                style={{ marginBottom: 10 }}
                disabled={!valid || submitting}
                onPress={handleSubmit}
                title="Done!"
                color="green"
            />
        </View>
    );

ExcerciseView.propTypes = {
    submitFailed: PropTypes.bool.isRequired,
    submitSucceeded: PropTypes.bool.isRequired,
    submitting: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
};

ExcerciseView.defaultProps = {
    submitting: false,
};

export default ExcerciseView;
