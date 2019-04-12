import React, { Component } from 'react';
import { View } from 'react-native';
import ExcerciseDetail from './ExcerciseDetail';
// import Card from './Card';

// Parent state component

export default class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            excercises: [
                {
                    excerciseName: 'ExcerciseName1',
                },
                {
                    excerciseName: 'ExcerciseName2',
                }
            ]
        };
    }

    renderExcercises() {
        return this.state.excercises.map((excercise, index) =>
            <ExcerciseDetail key={index} excercise={excercise} />);
    }

    render() {
        return (
            <View>
                {this.renderExcercises()}
            </View>
        );
    }
}
