import PropTypes from 'prop-types';
import React from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from './styles';

const RFTextInput = ({
    input: { onBlur, onChange, onFocus, value },
    meta: { error, touched, valid },
    disabled,
}) => (
        <View>
            <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                onFocus={onFocus}
                value={value}
                editable={!disabled}
                selectTextOnFocus={!disabled}
                style={[
                    styles.rootInput,
                    {
                        color: disabled ? 'gray' : 'black',
                        borderColor: !valid && touched ? 'red' : 'gray'
                    },
                ]}
            />
            {!valid && touched && <Text style={styles.rootError}>{error}</Text>}
        </View>
    );

RFTextInput.propTypes = {
    input: PropTypes.shape({
        onBlur: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onFocus: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
    }).isRequired,
    meta: PropTypes.shape({
        error: PropTypes.string,
        touched: PropTypes.bool.isRequired,
        valid: PropTypes.bool.isRequired,
    }).isRequired,
};

RFTextInput.defaultProps = {
    disabled: false,
};

export default RFTextInput;
