import React, { Component } from 'react';
import { CheckBox } from 'react-native-elements';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class CheckboxMachine extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            done: false,
            showMarkNumber: false,
            inputAvailable: false,
            showNumber: false,
            numberOfDone: 0,
            randomColor1: Math.floor(Math.random() * 250),
            randomColor2: Math.floor(Math.random() * 250),
            randomColor3: Math.floor(Math.random() * 250)
        };
    }

    ShowNumberInput = () => {
        this.setState({
            inputAvailable: !this.state.inputAvailable,
            showNumber: true
        });
        this.textInput.current.focus();
    }

    showNumberAgain = () => {
        this.setState({
            inputAvailable: true,
            showNumber: true
        });
    }

    render() {
        const { cardCheckBox, markNumber } = styles;

        return (
            <View>
                {
                    (this.state.inputAvailable) ? (
                        // Here you can edit your excercise counts.. 
                        <TextInput
                            center
                            style={markNumber}
                            ref={this.textInput}
                            onChangeText={(numberOfDone) => this.setState({ numberOfDone })}
                            keyboardType={'numeric'}
                            onSubmitEditing={this.ShowNumberInput}
                            value={this.state.numberOfDone}
                        />
                    ) : (
                            (this.state.showNumber) ? (
                                <TouchableOpacity>
                                    <CheckBox
                                        style={cardCheckBox}
                                        title={this.state.numberOfDone}
                                        checked
                                        activeOpacity={0.1}
                                        checkedColor='green'
                                        iconType='material'
                                        checkedIcon='done'
                                        onLongPress={this.showNumberAgain}
                                    />
                                </TouchableOpacity>
                            ) : (
                                    // This checkbox shows first.. 
                                    <TouchableOpacity>
                                        <CheckBox
                                            style={cardCheckBox}
                                            center
                                            checkedIcon='done'
                                            uncheckedIcon='add'
                                            // Color for uncheckedIcon is given randomly everytime
                                            uncheckedColor={`rgba(${this.state.randomColor1},
                                                ${this.state.randomColor2},
                                                ${this.state.randomColor3},0.55)`}
                                            activeOpacity={0.1}
                                            iconRight
                                            iconType='material'
                                            checkedColor='green'
                                            checked={this.state.done}
                                            onLongPress={this.ShowNumberInput}
                                            onPress={() => this.setState({
                                                done: !this.state.done
                                            })}
                                        />
                                    </TouchableOpacity>
                                )
                        )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    markNumber: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: 'green',
    },
    // cardCheckBox: {
    //     checkboxSize: 22
    // },
    changeColor: {
        backgroundColor: 'green'
    }
});

export default CheckboxMachine;
