import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import ExcerciseRF from './ExcerciseRF';

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
        // this.state = {
        //    
        // };
    }
    handleSubmit = async ({ excerciseName, weight, sets, reps, pause }) => {
        console.log('Excercise submitted');
        await wait();

        // 1. Luo TrainingDay - paketoitusetti, jonka voi viedä parent form-komponenttiin
        // 2. Parent komponentissa uutuuden pitäisi jatkaa vanhaa.. eli concat yms. 
       
        this.props.trainingDayLiftUp(excerciseName, weight, sets, reps, pause);
       
        console.log(`These are PROPS. excerciseName: ${this.props.excerciseName}
        weight: ${this.props.weight} sets:${this.props.sets}
        reps: ${this.props.reps} pause: ${this.props.pause}`);

        // throw new Error(); // TEST SUBMISSION ERROR
    }

    render() {
        const { justAddedTrainingDay } = styles;
        return (
            <View>
                <ExcerciseRF onSubmit={this.handleSubmit} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    justAddedTrainingDay: {
      color: 'blue'
    }
  });
  

export default ExcerciseCreation;
