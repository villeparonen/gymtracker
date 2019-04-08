import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Workout extends Component {
    
    render() {
        const { container, devInformation } = styles;
        return (
            <View style={container}>
                <Text style={devInformation}>
                    Workout component: 
                    Here you can see programName that you have chosen. 
                    Under that you can see current trainingday. 
                    You can check movements done. 
                    And finally you can check trainingday done!
                    This saves to history and will be seen in analytics.  
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
