import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Header from '../src/components/header';
import Workout from '../src/components/Workout/Workout';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { container } = styles;

    return (
      <ScrollView style={container}>
        <Header headerName={'Workout!'} />
        <Workout />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
});
