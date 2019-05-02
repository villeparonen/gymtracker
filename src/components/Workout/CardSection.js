import React from 'react';
import { View, StyleSheet } from 'react-native';

// Styling component

const CardSection = (props) => {
    const { cardsectionStyle } = styles;

    return (
        <View style={cardsectionStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    cardsectionStyle: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        borderColor: 'lightblue',
        position: 'relative'
    }
});

export default CardSection;
