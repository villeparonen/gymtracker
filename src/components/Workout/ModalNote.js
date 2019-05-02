import React, { Component } from 'react';
import { Modal, Text, View, TextInput, Alert, StyleSheet, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';

// This is component for writing nodes. User click 'noteIcon' Icon and then opens a modal.
// Inside modal user can write notes and save them attached to certain excercise
// 'NoteIcon' should change colour/oulook when it contains any notes. 

class ModalNote extends Component {
    state = {
        modalVisible: false,
        showNote: false,
        note: '',
        date: '',
        timerRunning: false,
        time: 5000
    };

    setModalVisible = () => {
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    submitNote = () => {
        this.setState({ showNote: true });
        this.TextInput.value = '';
    }

    render() {
        const { noteIcon, viewForNotes, showNotes, modalContent, closeButton, textAreaContainer, modalContainer, textArea } = styles;
        return (
            <View>
                <Modal
                    style={modalContainer}
                    animationType="none"
                    transparent={true}
                    presentationStyle='overFullScreen'
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}
                >
                    <View style={viewForNotes}>
                        <View style={modalContent}>
                            <Text>Notes for THIS.EXERCISE!</Text>
                            <Text>Last time you did this excercise was DATE</Text>
                            <Text>Last time you did: Weights, sets, reps</Text>
                            <Text>Today you are going to do: Weights, sets, reps</Text>
                            <View style={textAreaContainer} >
                                <Text>Write notes: </Text>
                                <TextInput
                                    style={textArea}
                                    underlineColorAndroid='blue'
                                    numberOfLines={3}
                                    multiline={false}
                                    onSubmitEditing={this.submitNote}
                                    onChangeText={(text) => this.setState({
                                        note: text,
                                        date: (new Date()).toLocaleDateString('fi-FI')
                                    })}
                                    value={this.state.note}
                                    ref={input => { this.TextInput = input; }}
                                />
                            </View>
                        </View>
                        {this.state.showNote ?
                            (<View style={showNotes}><Text>Notes:</Text><Text>{this.state.date}: {this.state.note}</Text></View>)
                            : (null)}
                     
                    </View>
                    <View style={closeButton}>
                        <Button
                            title="Save and close"
                            type="solid"
                            onPress={this.setModalVisible}
                        />
                    </View>
                </Modal>
                <View style={noteIcon}>
                    <Icon
                        onPress={this.setModalVisible}
                        name='note'
                        size={20}
                        type='material'
                        color='turquoise'
                        opacity={0.8}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textAreaContainer: {
        padding: 5
    },
    closeButton: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'turquoise',
        marginRight: 12,
        marginLeft: 12
    },
    textArea: {
        borderWidth: 1,
        borderColor: 'turquoise',
        padding: 5,
        marginBottom: 20
    },
    modalContainer: {
        flex: 1, 
        marginTop: '50%'
    },
    viewForNotes: {
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 1,
        borderColor: 'turquoise',
        opacity: 0.97,
        marginTop: 40,
        marginLeft: 12,
        marginRight: 12,
        height: '50%'
    },
    noteIcon: {
        marginLeft: 10
    },
    showNotes: {
        paddingLeft: 10
    }
});

export default ModalNote;
