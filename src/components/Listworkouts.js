import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workoutList: [
                {
                    title: 'Appointments',
                    icon: 'av-timer'
                },
                {
                    title: 'Trips',
                    icon: 'flight-takeoff'
                },
            ]
        };
        this.handleListPress = this.handleListPress.bind(this);
    }

    handleListPress = event => {
        console.log(`Listan elementtiä: ${event.target} painettu`);
    }

    render() {
        const { container, devInformation } = styles;

        return (
            <View style={container}>

                <List>
                    {this.state.workoutList.map((item, index) =>
                        (<ListItem
                            key={index}
                            title={item.title}
                            leftIcon={{ name: item.icon }}
                            onPress={this.handleListPress}
                        />)
                    )}
                </List>

                <Text style={devInformation}>
                    This is workout bank.
                    Here you can choose your own workout. Checkpoint.
                    That brings workout to Workout! screen.
             </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black'
    },
    devInformation: {
        color: 'red'
    }
});
