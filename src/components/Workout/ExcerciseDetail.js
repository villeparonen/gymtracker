import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Styling component
// Only presentational component, therefore functional component

const ExcerciseDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text>{props.excercise.excerciseName}</Text>
            </CardSection>
        </Card>
    );
};

export default ExcerciseDetail;
