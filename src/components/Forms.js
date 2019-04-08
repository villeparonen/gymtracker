import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ProgSelection from './ProgSelectionForm';
import Listworkouts from './Listworkouts';

// import DaySelection from './DaySelectionForm';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

export default class Forms extends Component {
  state = {
    activeForm: ''
  };

  handlePressProgram = () => this.setState({ activeForm: 'Program' });
  // handlePressDay = () => this.setState({ activeForm: 'Day' });
  handleListworkouts = () => this.setState({ activeForm: 'Listworkouts' });

  render() {
    const { activeForm } = this.state;
    const { container } = styles;
    return (
      <Provider store={store}>
        <View style={container}>
        <Button title="See list of workouts" onPress={this.handleListworkouts} />
          <Button title="Create new workout" onPress={this.handlePressProgram} />
          {/* <Button title="Day" onPress={this.handlePressDay} /> */}
          {activeForm === 'Program' && <ProgSelection />}
          {activeForm === 'Listworkouts' && <Listworkouts />}
          {/* {activeForm === 'Day' && <DaySelection />} */}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  devInformation: {
    color: 'red'
  }
});
