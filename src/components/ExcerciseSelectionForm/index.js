import React, { Component } from 'react';
import { View } from 'react-native';
import ExcerciseRF from './ExcerciseRF';
import { API, graphqlOperation } from 'aws-amplify';
import { createTrainingDay } from '../../graphql/mutations';

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

class ExcerciseCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
           //
        };
    }
    handleSubmit = async ({ excerciseName, weight, sets, reps, pause }) => {
        console.log('Excercise submitted');
        await wait();
       
        this.props.trainingDayLiftUp(excerciseName, weight, sets, reps, pause);
       
        console.log(`These are PROPS. excerciseName: ${this.props.excerciseName}
        weight: ${this.props.weight} sets:${this.props.sets}
        reps: ${this.props.reps} pause: ${this.props.pause}`);

                // createTrainingDay(input: $input) {
        //     workout {
        //       programName
        //       id
        //       goal
        //       description
        //       trainingdays {
        //         id
        //         order
        //         title
        //         description
        //       }

        API.graphql(graphqlOperation(createTrainingDay, { input }));
        // throw new Error(); // TEST SUBMISSION ERROR
    }

    render() {
        return (
            <View>
                <ExcerciseRF onSubmit={this.handleSubmit} />
            </View>
        );
    }
}

export default ExcerciseCreation;
