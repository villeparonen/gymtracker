import React, { Component } from 'react';

// import the API & graphqlOperation helpers as well as the mutation
import { API, graphqlOperation } from 'aws-amplify';
import { createWorkout, createTraining, createExcercise } from '../graphql/mutations';
import { StyleSheet, View, Button, Text } from 'react-native';

// Screens
import ProgramForm from './WorkoutBuilder/ProgramForm';
import ExcerciseCreation from './WorkoutBuilder/ExcerciseForm';
import Listworkouts from './Listworkouts';
import ShowProgress from './ShowProgress';

export default class Forms extends Component {
  state = {
    // Screen changers
    activeForm: '',
    // Workout
    programName: '',
    goal: '',
    startingDate: 0, // not yet in schema
    endingDate: 0, // not yet in schema
    streakForWeek: 0, // not yet in schema
    // Training
    order: 0,
    title: '',
    done: false,
    next: false, 
    description: '',
    trainingNotes: '', // nimi
    // Excercise
    excerciseName: '',
    weight: 0,
    sets: 0,
    reps: 0,
    excerciseNotes: '', // nimi
    pause: 0, // not yet in schema
    programInProgress: null,
    ShowTrainingDay: false,
    // IDs
    justCreatedTrainingID: '',
    justCreatedWorkoutID: ''
  };

  // SCREEN CHANGES
  // Screen changes when activeForm string changes to certain value :
  handlePressProgram = () => this.setState({ activeForm: 'Program' });
  handleListworkouts = () => this.setState({ activeForm: 'Listworkouts' });
  handleExcerciseCreation = () => this.setState({ activeForm: 'Excercise' });
  handleShowProgress = () => this.setState({ activeForm: 'ShowProgress' })


  // GraphQL MUTATIONS. Create Workout, Training and Excercise. 
  createExcercise = async () => {
    // Values for Excercise: ID, excerciseName, weight, sets, reps, notes
    const ExcercisesToGraphQL = {
      excerciseTrainingdayId: this.state.justCreatedTrainingID,
      excerciseName: this.state.excerciseName,
      weight: this.state.weight, 
      sets: this.state.sets, 
      reps: this.state.reps,
      // notes: this.state.excerciseNotes
    };
    console.log('ExcercisesToGraphQL' + ExcercisesToGraphQL);
    try {
      const result = await API.graphql(graphqlOperation(createExcercise, {
        input: ExcercisesToGraphQL
      }));
      console.log(`Sent training ID is: ${result.data.createExcercise.id}`);
      console.log('Excercise successfully created');
    } catch (err) {
      console.error('Error on createExcercise GraphQL Query');
    }
  }

  createTraining = async () => {
    // Values for Training: ID, Order, Title, Done, Next, Description, Notes
    const TrainingToGraphQL = {
      trainingWorkoutId: this.state.justCreatedWorkoutID,
      order: 1,
      // title: this.state.title,
      // done: this.state.done,
      // next: this.state.next,
      // description: this.state.description,
      // notes: this.state.trainingNotes
    };
    console.log(TrainingToGraphQL);
    try {
      const result = await API.graphql(graphqlOperation(createTraining, {
        input: TrainingToGraphQL
      }));
      console.log(`Sent training ID is: ${result.data.createTraining.id}`);
      this.setState({
        justCreatedTrainingID: result.data.createTraining.id
      });
      console.log('Training successfully created');
      this.createExcercise();
    } catch (err) {
      console.error('Error on createExcercise GraphQL Query');
    }
  }

  createWorkout = async () => {
    // Values for Workout:  programName, goal, startingDate, endingDate, streakForWeek
    const workoutToGraphQL = {
      programName: this.state.programName,
      goal: this.state.goal,
      // startingDate: this.state.startingDate,
      // endingDate: this.state.endingDate,
      // streakForWeek: this.state.streakForWeek
    };
    console.log(workoutToGraphQL);
    try {
      const result = await API.graphql(graphqlOperation(createWorkout, {
        input: workoutToGraphQL
      }));
      console.log(`Sent workout ID is: ${result.data.createWorkout.id}`);
      this.setState({
        justCreatedWorkoutID: result.data.createWorkout.id
      });
      console.log('this.state.justCreatedWorkoutID' + this.state.justCreatedWorkoutID);
      console.log('Workout successfully created');
    } catch (err) {
      console.error('Error on CreateWorkout GraphQL Query');
    }
  }

  // A. I’m using async/await to ensure I wait for the data.
  // B. I must use try/catch so that I can catch network and authentication errors.
  // C. The result has a data block with the fields that I requested
  // result = Object {
  //   "data": Object {
  //     "createWorkout": Object {
  //       "id": Returned ID number,
  //       "programName": null
  //        etc..
  //     }
  //   }
  // }

  // This brings state to the parent (this forms.js) from the child - excerciseForm
  trainingDayLiftUp = (excerciseName, weight, sets, reps, pause) => {
    console.log('lift up happening');
    this.setState({
      excerciseName,
      weight,
      sets,
      reps,
      pause,
    });

    // this.setState({
    //   programInProgress: [
    //     {
    //       excerciseName: this.state.excerciseName,
    //       weight: this.state.weight,
    //       sets: this.state.sets,
    //       reps: this.state.reps,
    //       pause: this.state.pause
    //     }
    //   ]
    // });

    // Kun on valmista.. Näyttää päivän ShowProgress sivulla. 
    this.setState({ ShowTrainingDay: true });
    this.createTraining();
  }

  // This brings state to the parent (this forms.js) from the child - programForm
  programNameLiftUp = (programName, goal, startingDate, endingDate, streakForWeek) => {
    console.log("1" + programName);
    this.setState({
      programName,
      goal,
      startingDate,
      endingDate,
      streakForWeek
    });
    console.log("2" + this.state.programName + this.state.goal + this.state.streakForWeek);
    this.createWorkout();
  }

  render() {
    const { activeForm } = this.state;
    const { container } = styles;
    return (
      <View style={container}>
        {activeForm !== 'Listworkouts' &&
          <Button title="List of workouts" onPress={this.handleListworkouts} />}
        {(activeForm !== 'Program' && activeForm !== 'Excercise') &&
          <Button title="Create new workout" onPress={this.handlePressProgram} />}
        {activeForm === 'Excercise' &&
          <Button title="Program in progress" onPress={this.handleShowProgress} />}

        {this.state.ShowTrainingDay && <ShowProgress
          programName={this.state.programName}
          goal={this.state.goal}
          weight={this.state.weight}
          sets={this.state.sets}
          reps={this.state.reps}
          pause={this.state.pause}
          programInProgress={this.state.programInProgress}
        />}

        {activeForm === 'Program' &&
          // Tässä oli ennen ProgSelection - korvattu uudella: 
          <ProgramForm
            handleExcerciseCreation={this.handleExcerciseCreation.bind(this)}
            programNameLiftUp={this.programNameLiftUp}
            programName={this.state.programName}
            goal={this.state.goal}
          />}

        {activeForm === 'Excercise' &&
          <ExcerciseCreation
            trainingDayLiftUp={this.trainingDayLiftUp}
            excerciseName={this.state.excerciseName}
            weight={this.state.weight}
            sets={this.state.sets}
            reps={this.state.reps}
            pause={this.state.pause}
          />}

        {activeForm === 'Listworkouts' && <Listworkouts />}

        {activeForm === 'ShowProgress' && <ShowProgress
          programName={this.state.programName}
          goal={this.state.goal}
          weight={this.state.weight}
          sets={this.state.sets}
          reps={this.state.reps}
          pause={this.state.pause}
          programInProgress={this.state.programInProgress}
        />}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
