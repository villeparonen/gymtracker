import React from 'react';
import { View, StyleSheet } from 'react-native';
import Forms from '../src/components/Forms';
import Header from '../src/components/header';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { container } = styles;

    return (
      <View style={container}>
        <Header headerName={'Set and change programs!'} />
        <Forms />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
