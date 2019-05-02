import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import ExcerciseDetail from './ExcerciseDetail';
// import Card from './Card';

// Parent state component

export default class Workout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            programName: 'Voimaohjelma',
            goal: 'Saada lisää voimaa',
            trainingDay: 'trainingDay 1',
            excercises: [
                {
                    excerciseName: 'Penkki',
                    weights: 70,
                    sets: 3,
                    reps: 10
                },
                {
                    excerciseName: 'Kyykky',
                    weights: 90,
                    sets: 4,
                    reps: 10
                },
                {
                    excerciseName: 'Mave',
                    weights: 75,
                    sets: 5,
                    reps: 5
                },
            ]
        };
    }

    renderExcercises() {
        return this.state.excercises.map((excercise, index) =>
            <ExcerciseDetail key={index} excercise={excercise} />);
    }

    render() {
        const { superButton, programHeader,
            programHeaderLeft, programHeaderCenter, programHeaderRight } = styles;

        return (
            <View>
                <View style={programHeader}>
                    <View style={programHeaderLeft}>
                        <Icon
                            size={30}
                            name='chevron-left'
                            type='octicon'
                            color='green'
                        />
                    </View>
                    {/* Näkymään tulee Aktiiviseksi merkitty ohjelma (tiettynä päivänä) */}
                    <View style={programHeaderCenter}>
                        <Text style={{ fontSize: 20 }}>{this.state.programName}</Text>
                        <Text style={{ fontSize: 20 }}>{this.state.trainingDay}</Text>
                    </View>
                    <View style={programHeaderRight}>
                        <Icon
                            size={30}
                            name='chevron-right'
                            type='octicon'
                            color='green'
                        />
                    </View>
                </View>
                <View>
                    {this.renderExcercises()}
                </View>
                <View style={superButton}>
                    {/* Kun liikkeet ovat Checked button muuttuu vihreäksi. 
                Sitä voi kuitenkin painaa aiemminkin. 
                Kun nappia painaa ohjelma jää workout näkymään. 
                Mutta ensi kerralla näkymässä on eri ohjelma.  */}
                    <Button
                        title="Done!"
                        type="outline"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    programHeader: {
        marginTop: 16,
        marginBottom: 6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    programHeaderLeft: {
        // float: 'left', float ominaisuus ei toimi stylesheetissä
        marginRight: 40
    },
    programHeaderCenter: {
        textAlign: 'center',
        alignItems: 'center'
    },
    programHeaderRight: {
        // float: 'right',
        marginLeft: 40
    },
    superButton: {
        margin: 12
    }
});
