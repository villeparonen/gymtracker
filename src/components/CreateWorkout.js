import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './WorkoutBuilder/styles';
import { connect, getIn } from 'formik';

// Button and MutationQuery
//      https://jaredpalmer.com/formik/docs/api/connect

function CreateWorkout(props) {
    const { buttonContainer, superButton } = styles;
    return (
        <View style={buttonContainer}>
            <Button
                title='Next!'
                disabled={getIn(!props.formik.isValid)}
                onPress={getIn(props.formik.handleSubmit)}
                type="outline"
                style={superButton}
            />
        </View>
    );
}

export default connect(CreateWorkout);
