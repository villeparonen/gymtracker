import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import CheckboxMachine from './CheckboxMachine';
import Card from './Card';
import ModalNote from './ModalNote';
import CardSection from './CardSection';

class ExcerciseDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            checked2: false,
            editReps: false,
            editSets: false,
            editWeights: false,
            arrayOfSets: null,
            Sets: this.props.excercise.sets,
            Reps: this.props.excercise.reps,
            Weights: this.props.excercise.weights
        };
    }

    handleEditWeights = () => {
        this.setState({
            editWeights: !this.state.editWeights,
        });
        console.log(this.state.editWeights);
        console.log(this.state.Weights);
    }

    handleEditReps = () => {
        this.setState({
            editReps: !this.state.editReps,
        });
        console.log(this.state.editReps);
        console.log(this.state.Reps);
    }

    handleEditSets = () => {
        this.setState({
            editSets: !this.state.editSets,
        });
        console.log(this.state.editSets);
        console.log(this.state.Sets);
    }

    render() {
        const { cardSection, editableInput, excerciseName, editableText } = styles;

        return (
            <Card>
                <CardSection>
                    {/* Card includes info about one Excercise */}
                    <View style={cardSection}>
                        <Text style={excerciseName}>{this.props.excercise.excerciseName}</Text>
                        {this.state.editWeights ?
                            (<TextInput
                                style={editableInput}
                                onChangeText={(Weights) => this.setState({ Weights })}
                                keyboardType={'numeric'}
                                onSubmitEditing={this.handleEditWeights}
                                value={this.state.Weights}
                            />)
                            : (<Text style={editableText} onPress={this.handleEditWeights}>
                                {this.state.Weights} kg
                            </Text>
                            )}
                        
                        {this.state.editSets ?
                            (<TextInput
                                style={editableInput}
                                onChangeText={(Sets) => this.setState({ Sets })}
                                keyboardType={'numeric'}
                                onSubmitEditing={this.handleEditSets}
                                value={this.state.Sets}
                            />)
                            : (<Text style={editableText} onPress={this.handleEditSets}>
                                Sets: {this.state.Sets}
                            </Text>)}

                        {this.state.editReps ?
                            (<TextInput
                                style={editableInput}
                                onChangeText={(Reps) => this.setState({ Reps })}
                                keyboardType={'numeric'}
                                onSubmitEditing={this.handleEditReps}
                                value={this.state.Reps}
                            />)
                            : (<Text style={editableText} onPress={this.handleEditReps}>
                                Reps: {this.state.Reps}
                            </Text>
                            )}
                    </View>
                    <ModalNote />
                </CardSection>
                <CardSection>
                    {
                        // For every excercise this creates Checkboxes by number of Sets
                        (Array.from({ length: this.state.Sets }, (item, index) => index))
                            .map(index =>
                                <CheckboxMachine key={index} Sets={this.state.Sets} />
                            )
                    }
                </CardSection>
            </Card>

        );
    }
}

// Styles for CardSection and Texts & inputs for ExcerciseName, sets and reps
const styles = StyleSheet.create({
    excerciseName: {
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'lightblue',
        padding: 7
    },
    editableText: {
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'lightgreen',
        padding: 7
    },
    editableInput: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'purple',
        padding: 7
    },
    cardSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardText: {
        fontSize: 16
    }
});

// Onko kunnossa?  ? ? ?
ExcerciseDetail.propTypes = {
    Sets: PropTypes.number.isRequired,
    Weights: PropTypes.number.isRequired,
    Reps: PropTypes.number.isRequired,
  };

  // Default values for props
  ExcerciseDetail.defaultProps = {
    Sets: 0,
    Weights: 0,
    Reps: 0
  };

export default ExcerciseDetail;
