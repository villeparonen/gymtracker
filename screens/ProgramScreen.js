import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Forms from '../src/components/Forms';
import Header from '../src/components/header';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { container } = styles;

    return (
      <ScrollView style={container}>
        <Header headerName={'Set and change programs!'} />
        <Forms />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
});
