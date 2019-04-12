import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ShowProgress = (props) => {
    const { container, ExcerciseContainer } = styles;
    console.log(props.programInProgress);
    return (
        <View style={container}>
            <View>
                <Text>Program name: {props.programName}</Text>
                <Text>Goal: {props.goal}</Text>
                {props.programInProgress ? (
                    props.programInProgress.map((item, index) =>
                        (
                            <View key={index} style={ExcerciseContainer}>
                                <Text>{index + 1}. Excercise: {item.excerciseName}</Text>
                                {item.weight ? (<Text>Starting weight: {item.weight}</Text>) : (<Text>Starting weight: Not set yet</Text>)}
                                {item.sets ? (<Text>Sets to make: {item.sets}</Text>) : (<Text>Sets: Not set yet</Text>)}
                                {item.reps ? (<Text>Reps: {item.reps}</Text>) : (<Text>Reps: Not set yet</Text>)}
                                {item.pause ? (<Text>Pauses: {item.pause}</Text>) : (<Text>Pauses: Not set yet</Text>)}
                            </View>
                        )
                    )
                ) : (<Text>You dont have excercises set yet</Text>)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
    },
    ExcerciseContainer: {
        color: 'blue',
        fontSize: 20,
        borderWidth: 2,
        borderColor: 'red'
    }
});

export default ShowProgress;
