import React from 'react';
import { StyleSheet, View, Text, List } from 'react-native';
import { ListItem } from 'react-native-elements'; 
import { AppLoading, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


// import { Provider } from 'react-redux';
// import { createStore, combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
// import React, { Component } from 'react';
// import { StyleSheet, View, Button } from 'react-native';
// import Header from '../src/components/header';
// // import ProgSelection from './src/components/progselection';
// import ProgSelection from '../src/components/ProgSelectionForm';
// import DaySelection from '../src/components/DaySelectionForm';

// const rootReducer = combineReducers({
//   form: formReducer,
// });
// const store = createStore(rootReducer);

// export default class App extends Component {
//   state = {
//     activeForm: 'Program',
//   };

//   handlePressProgram = () => this.setState({ activeForm: 'Program' });
//   handlePressDay = () => this.setState({ activeForm: 'Day' });

//   render() {
//     const { activeForm } = this.state;
//     const { container } = styles;
//     return (
//       <Provider store={store}>
//         <View style={container}>
//           <Header headerName={'Gymtracker'} />
//           <Button title="Program" onPress={this.handlePressProgram} />
//           <Button title="Day" onPress={this.handlePressDay} />
//           {activeForm === 'Program' && <ProgSelection />}
//           {activeForm === 'Day' && <DaySelection />}
//         </View>
//       </Provider>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
// });