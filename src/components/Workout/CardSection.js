import React from 'react';
import { View } from 'react-native';

// Styling component

const CardSection = (props) => {
    const { cardsectionStyle } = styles;

    return (
        <View style={cardsectionStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    cardsectionStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;
