import React, { Component } from 'react';
import { Modal, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';

// This is component for writing nodes. User click 'noteIcon' Icon and then opens a modal.
// Inside modal user can write notes and save them attached to certain excercise
// 'NoteIcon' should change colour/oulook when it contains any notes. 

class ModalNote extends Component {
    state = {
        modalVisible: false,
        note: ''
    };

    setModalVisible = () => {
        this.setState({ modalVisible: !this.state.modalVisible });
    }

    render() {
        const { noteIcon, viewForNotes, modalContent, closeButton, modalContainer, textArea } = styles;
        return (
            <View>
                <Modal
                    style={modalContainer}
                    animationType="none"
                    transparent={true}
                    presentationStyle='overFullScreen'
                    visible={this.state.modalVisible}
                    onRequestClose={() => {

                    }}>
                    <View style={viewForNotes}>
                        <View style={modalContent}>
                            <Text>Notes for THIS.EXERCISE!</Text>
                            <Text>Last time you did this excercise was DATE</Text>
                            <Text>Last time you did: Weights, sets, reps</Text>
                            <Text>Today you are going to do: Weights, sets, reps</Text>
                            <View style={styles.textAreaContainer} >
                                <Text>Notes: </Text>
                                <TextInput
                                    style={textArea}
                                    underlineColorAndroid="transparent"
                                    numberOfLines={3}
                                    multiline={true}
                                    onChangeText={(note) => this.setState({ note })}
                                    value={this.state.note}
                                />
                            </View>
                        </View>
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

const styles = {
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
    modalContent: {
        // justifyContent: 'flex-start'
    },
    textArea: {
        borderWidth: 1,
        borderColor: 'turquoise',
        padding: 5,
        marginBottom: 20
    },
    modalContainer: {
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
};

export default ModalNote;
