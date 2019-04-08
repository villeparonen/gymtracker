import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import WorkoutScreen from '../screens/WorkoutScreen';
import ProgramScreen from '../screens/ProgramScreen';
import HistoryScreen from '../screens/HistoryScreen';

// Navigation for WORKOUT screen
const HomeStack = createStackNavigator({
  Home: WorkoutScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Workout!',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

// Navigation for PROGRAMS screen
const SettingsStack = createStackNavigator({
  Settings: ProgramScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Programs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

// Navigation for HISTORY screen
const HistoryStack = createStackNavigator({
  Settings: HistoryScreen,
});

HistoryStack.navigationOptions = {
  tabBarLabel: 'History',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
  HistoryStack,
});
