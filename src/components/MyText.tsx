import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TextProps } from '../modules/interfaces'
import layout from './Layout'
import { State } from '../modules/abstraction'

const MyText: React.FC<TextProps> = (props) => {

    return (
        <Text style={styles.text}>
            {`You pressed the button ${props.state.value.count} times!`}
        </Text>
    )
}



const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: 'gray',
        marginVertical: 7
    }
});

export default layout()(MyText)
