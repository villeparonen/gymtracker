import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { ListItem, Button } from 'react-native-elements';

export default class Listworkouts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDays: '',
            itemTitle: '',
            itemType: '',
            exerciseName: '',
            openProgram: false,
            workoutList: [
                {
                    title: 'Arnoldin kultainen kuusikko',  // Program's name?
                    type: 'Lihasmassa', // Program's type or goal?
                    days: '1-jakoinen' // How many different trainings?
                },
                {
                    title: 'Voima5x5',
                    type: 'Voima',
                    days: '3-jakoinen'
                }
            ]
        };
        this.handleListPress = this.handleListPress.bind(this);
    }

    handleListPress = (item) => {
        console.log(item);
        this.setState({
            openProgram: true
        });
        this.setState({
            itemDays: item.days,
            itemTitle: item.title,
            itemType: item.type
        });
        console.log(this.state.itemDays + this.state.itemTitle + this.state.itemType);
    };

    handleCloseButtonPress = () => {
        this.setState({
            openProgram: false
        });
    }

    render() {
        const { container, openedList, inputStyle } = styles;

        return (

            <View style={container}>

                {this.state.openProgram ? (
                    <View style={openedList}>
                        <Text style={{ fontWeight: 'bold' }}>{this.state.itemTitle}</Text>
                        <Text>Type: {this.state.itemType}</Text>
                        <Text>How many different trainings: {this.state.itemDays}</Text>
                        <Text>Notes: -- </Text>
                        <Text>Goal: Voimaaa! </Text>
                        <Text>StartDate: 19/04/2019</Text>
                        <Text>EndDate: 3 months</Text>
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>Add training</Text>
                            <Text>Add exercise:</Text>
                            {/* Tähän toiminnallisuus, että jos klikkaa niin 
                            voi muokata alla olevan inputin avulla */}
                            <TextInput
                                style={inputStyle}
                                onChangeText={(exerciseName) => this.setState({ exerciseName })}
                                value={this.state.exerciseName}
                                placeholder='Type name of the exercise..'
                            />
                        </View>
                        <View>
                            <Button
                                title="Choose this program"
                                type="outline"
                            />

                            <Button
                                title="Close"
                                type="outline"
                                onPress={this.handleCloseButtonPress}
                            />
                        </View>
                    </View>
                ) : (
                        <View>
                            <Text>Here you can choose your program: </Text>
                            {this.state.workoutList.map((item, index) =>
                                (
                                    <ListItem
                                        key={index}
                                        title={`${item.title}, ${item.type}`}
                                        onPress={() => { this.handleListPress(item); }}
                                    />
                                )
                            )}
                        </View>
                    )}

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
        fontSize: 20
    },
    devInformation: {
        color: 'red'
    },
    openedList: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#d6d7da'
    },
    inputStyle: {
        height: 40,
        borderWidth: 1,
        borderColor: '#d6d7da',
        margin: 5
    }
});
