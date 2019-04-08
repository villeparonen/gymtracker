
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Listworkouts from './Listworkouts';

export default class OpenedList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View>
                <Text>This is your program</Text>
                <View>
                    <Button
                        title="Choose this program"
                        type="outline"
                    />

                    <Button
                        title="Close"
                        type="outline"
                        onPress={<Listworkouts />}
                    />
                </View>
            </View>
        );
    }
}
