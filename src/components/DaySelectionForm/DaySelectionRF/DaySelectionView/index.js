import { PropTypes } from 'prop-types';
import { Button, View, Text } from 'react-native';
import React from 'react';
import { Field } from 'redux-form';
import RFTextView from '../../../RFTextInput';

// The component is responsible for the form’s view
// As this component is designed to be used with Redux Form, 
// it requires a handleSubmit function property
// This handleSubmit function is passed down from the outmost component

const DaySelectionView = ({ handleSubmit }) => (
  <View>
    <Text>Order of the training? </Text><Field
      name="dayOrder"
      component={RFTextView}
    />
    <Text>What is the name of the training? </Text><Field
      name="dayName"
      component={RFTextView}
    />
    <Button
      title="Submit"
      color="green"
      onPress={handleSubmit}
    />
  </View>
);

DaySelectionView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default DaySelectionView;
