import React from 'react';
import { View, StyleSheet } from 'react-native';

// Styling component

const Card = (props) => {
    const { cardStyle } = styles;

    return (
        <View style={cardStyle}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    cardStyle: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
});


export default Card;
