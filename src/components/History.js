import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class App extends Component {
    
    render() {
        const { container, devInformation } = styles;
        return (
            <View style={container}>
                <Text style={devInformation}>
                   History component: 
                   Here you can see your training history. 
                   Date, program, training day consisted of which movements, sets, reps, weights.
                   Bonus: Calendar like HabitBull. 
             </Text>
            </View>
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
