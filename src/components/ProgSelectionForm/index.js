import React, { Component } from 'react';
import { View } from 'react-native';
import ProgSelectionRF from './ProgSelectionRF';
import { API, graphqlOperation } from 'aws-amplify';
import { createWorkout } from '../../graphql/mutations';

// SUBMIT Component
// This outer-most component is responsible for supplying a function 
// (via an onSubmit property) to handle the submission of the form

const wait = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 100);
});


// Often the form submit handler is asynchronous and takes awhile to complete. 
// a common pattern is to disable the form elements until the submission is complete.

class ProgSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }
    handleSubmit = async ({ programName, goal }) => {
        console.log('SUBMITTED');
        await wait();

        // Lift state up to Forms component
        this.props.programNameLiftUp(programName, goal);
        console.log(`These are programPROPS. 
        programName: ${this.props.programName} 
        goal: ${this.props.goal}`);

        const input = { programName, goal };
        API.graphql(graphqlOperation(createWorkout, { input }));

        // Change screen to Excercise Creation
        this.props.handleExcerciseCreation();
        // throw new Error(); // TEST SUBMISSION ERROR
    }

    render() {
        return (
            <View>
                <ProgSelectionRF
                    onSubmit={this.handleSubmit}
                />
            </View>
        );
    }
}

export default ProgSelection;
