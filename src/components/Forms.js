import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import ProgSelection from './ProgSelectionForm';
import ExcerciseCreation from './ExcerciseSelectionForm';
import Listworkouts from './Listworkouts';
import ShowProgress from './ShowProgress';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

export default class Forms extends Component {
  state = {
    activeForm: '',
    programName: null,
    goal: null,
    excerciseName: null,
    weight: 0,
    sets: 0,
    reps: 0,
    pause: 0,
    programInProgress: null,
    ShowTrainingDay: false
  };

  handlePressProgram = () => this.setState({ activeForm: 'Program' });
  handleListworkouts = () => this.setState({ activeForm: 'Listworkouts' });
  handleExcerciseCreation = () => this.setState({ activeForm: 'Excercise' });
  handleShowProgress = () => this.setState({ activeForm: 'ShowProgress' })

  trainingDayLiftUp = (excerciseName, weight, sets, reps, pause) => {
    this.setState({
      excerciseName,
      weight,
      sets,
      reps,
      pause,
    });

    // programInProgress  = trainingdays
    // tähän pitäisi laittaa concat.. ...
    this.setState({
      programInProgress: [
        {
          excerciseName: this.state.excerciseName,
          weight: this.state.weight,
          sets: this.state.sets,
          reps: this.state.reps,
          pause: this.state.pause
        }
      ]
    });

    this.setState({ ShowTrainingDay: true });
  }

  programNameLiftUp = (programName, goal) => this.setState({
    programName,
    goal
  });;

  render() {
    const { activeForm } = this.state;
    const { container } = styles;
    return (
      <Provider store={store}>
        <View style={container}>
          <Text>Just updated {(new Date()).toLocaleTimeString('fi-FI')}</Text>
          {activeForm !== 'Listworkouts' && <Button title="List of workouts" onPress={this.handleListworkouts} />}
          {(activeForm !== 'Program' && activeForm !== 'Excercise') && <Button title="Create new workout" onPress={this.handlePressProgram} />}
          {activeForm === 'Excercise' && <Button title="Program in progress" onPress={this.handleShowProgress} />}

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
            <ProgSelection
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
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
