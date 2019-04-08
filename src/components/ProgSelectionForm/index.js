import React, { Component } from 'react';
import ProgSelectionRF from './ProgSelectionRF';

// SUBMIT Component
// This outer-most component is responsible for supplying a function 
// (via an onSubmit property) to handle the submission of the form

const wait = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 3000);
});


// Often the form submit handler is asynchronous and takes awhile to complete. 
// a common pattern is to disable the form elements until the submission is complete.

class ProgSelection extends Component {
    handleSubmit = async ({ programName, goal }) => {
        console.log('SUBMITTED');
        console.log(`Program's name: ${programName}`);
        console.log(`Program's goal: ${goal}`);
        await wait();
        // throw new Error(); // TEST SUBMISSION ERROR
    }

    render() {
        return <ProgSelectionRF onSubmit={this.handleSubmit} />;
    }
}

export default ProgSelection;
