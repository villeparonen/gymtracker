import React from 'react';
import {
  //  Platform,
  // ScrollView,
  StyleSheet,
  // TouchableOpacity,
  View,
} from 'react-native';
import Header from '../src/components/header';
import Workout from '../src/components/Workout';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { container } = styles;

    return (
      <View style={container}>
        <Header headerName={'Workout!'} />
        <Workout />
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
