import React, { Component } from 'react';
import { View } from 'react-native';
import ProgSelectionRF from './ProgSelectionRF';

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
            programName: '',
            goal: '',
            programNameGiven: false
        };
    }
    handleSubmit = async ({ programName, goal }) => {
        console.log('SUBMITTED');
        await wait();
        this.setState({
            programName,
            goal,
            programNameGiven: true
        });
        console.log(this.state.programName + this.state.goal);

        // throw new Error(); // TEST SUBMISSION ERROR
    }

    render() {
        return (
            <View>
                {this.state.programNameGiven ?
                    <ProgSelectionRF onSubmit={this.handleSubmit} /> :
                    <ProgSelectionRF onSubmit={this.handleSubmit} />}
            </View>
        );
    }
}

export default ProgSelection;
