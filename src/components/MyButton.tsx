import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from '../modules/interfaces'
import layout from './Layout'
import { GlobalState } from '../modules/abstraction';

const MyButton: React.FC<ButtonProps> = props => {

    const handlePress = () => {
        const { state } = props
        const { value } = state
        let nextValue = value.count + 1
        state.setState({
            count: nextValue
        })
    }



    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.name}>
                {props.name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        height: 100,
        backgroundColor: 'blue',
        marginHorizontal: 7,
        borderRadius: 11
    },
    name: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '400',
        color: 'white'
    }
});

export default layout()(MyButton)
