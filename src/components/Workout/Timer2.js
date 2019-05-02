import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class Timer extends Component {
    state = {
        timer: null,
        counter: 2000
    };

    start = () => {
        const timer = setInterval(this.tick, 1000);
        this.setState({ timer });
    }

    tick = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    end = () => {
        const timer = clearInterval(this.state.timer);
        this.setState({ timer });
    }

    zeroed = () => {
        this.setState({ counter: 0 });
    }

    render() {
        const { editableInput } = styles;
        return (
            <View>
                <Text>{this.state.counter}</Text>

                <TextInput
                    style={editableInput}
                    onSubmitEditing={this.start}
                    onChangeText={(counter) => this.setState({ counter })}
                    value={this.state.counter}
                />

            <Button
                title='loppu'
                type='solid'
                onPress={this.end}
            />

            <Button
                title='alku'
                type='solid'
                onPress={this.start}
            />

            <Button
                title='nollaus'
                type='solid'
                onPress={this.zeroed}
            />

            </View >
        );
    }
}


const styles = StyleSheet.create({
    editableInput: {
        fontSize: 16,
        borderWidth: 2,
        borderColor: 'purple',
        padding: 7,
        backgroundColor: 'gray'
    },
});
